/*eslint-disable*/
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => {
  return (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  )
}
)

Select.propTypes = {
  onChange:  PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   register:PropTypes.string.isRequired,
}

const InputText = ({
  label,
  register,
  required
}) =>{
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  )
}

InputText.propTypes = {
  label:PropTypes.string.isRequired,
  register:PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}

const schema = yup.object({
  fileName: yup.string().required('此為必填欄位')
})

const ReactHookForm = () =>{
  const { handleSubmit, register, formState: { errors } }  = useForm({
    resolver: yupResolver(schema)
  })

  const handleClick = (data) =>{
    console.log(data, 'data')
    console.log('click')
  }

  return (
    <form onSubmit={handleSubmit(handleClick)}>
        <input {
        ...register('fileName'
          // { required: true }
          )
        } 
      />
        <div className="text-danger">
        {errors.fileName?.type === 'required' && "First name is required"}
          {/* {errors.firstName?.message} */}
        </div>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <Select
        label="請輸入:"
        {...register("age")}
      />
      <InputText
        label="輸入年紀:"
        register={register}
        required={true}
      />
      <button type="submit">
        點擊
      </button>
    </form>
  )
}

export default ReactHookForm