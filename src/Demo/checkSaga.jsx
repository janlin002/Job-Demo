import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { checkSaga } from '../Redux/action'

const Main = () => {
  const data = useSelector(state=> state.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkSaga())
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default Main;