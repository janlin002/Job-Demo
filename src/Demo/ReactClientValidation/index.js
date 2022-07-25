import React, { useState } from 'react'
import handleValidation from 'react-client-validation'
import Input from './input'

const ReactClientValidation = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [others, setOthers] = useState(null);
  const [errorValidation, setErrorValidation] = useState({});
  const handleSubmit = () => {
    const validationArray = [
      {
        index: "username",
        condition: [!username],
        errorMessage: "username cannot be null"
      },
      {
        index: "password",
        errorMessage: "passwords cannot be null",
        customCondition: (data, returnArray) => {
          if (!data) {
            returnArray.push(false);
          }
        }
      },
      {
        index: "others",
        condition: [!others],
        errorMessage: "others cannot be null"
      }
    ];

    let [isPass, errorObject] = handleValidation({
      errorArray: validationArray,
      dataSource: password,
      defaultErrorMessage: '啊啊啊啊'
    });
    if (isPass) {
      return alert("isPassed");
    } else {
      setErrorValidation(errorObject);
    }
  };
  console.log(errorValidation, 'errorValidation')
  return (
    <>
      <div style={{ width: '500px' }}>
        <div>username:</div>
        <Input
          isError={errorValidation?.username?.msg}
          style={{ margin: "10px" }}
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <div>password:</div>
        <Input
          isError={errorValidation?.password?.msg}
          style={{ margin: "10px" }}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <div>others:</div>
        <Input
          isError={errorValidation?.others?.msg}
          style={{ margin: "10px" }}
          onChange={({ target: { value } }) => setOthers(value)}
        />

        <div>
          <button style={{ margin: "5px" }} onClick={handleSubmit}>
          Submit
          </button>
          <button
            style={{ margin: "5px" }}
            onClick={() => setErrorValidation({})}
          >
          Clear
          </button>
        </div>
      </div>
    </>
  )
}

export default ReactClientValidation

// clear 要把內容清除
// onBlur 要重新驗證
// submit 時要先把錯誤訊息清掉