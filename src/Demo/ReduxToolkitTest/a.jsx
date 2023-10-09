import {
  useGetTodoQuery } from '../../ReduxToolkitApiSlice/todoApiSlice'

const ReduxToolkitTest = () =>{
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodoQuery()
  
  return (
    ...
  )
}
  
export default ReduxToolkitTest