import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

 const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch( err ) {
      setError(err);
    } finally {
      setLoading(false);
    }
 };

useEffect(() => {
  fetchData(axiosParams);
},[]);

 return { response, error, loading };
}

export default useAxios

// function App() {
//     const { response, loading, error, sendData } = useAxios({
//       method: "GET",
//       url: `/posts/1`,
//       headers: {
//         accept: '*/*'
//       }
//     });
  
//     return (
//       <div className="App">
//         <h1 className="page-title">Posts</h1>
//         {loading && (
//           <p>Loading...</p>
//         )}
//         {error && (
//           <p>{error.message}</p>
//         )}
//         {!loading && !error && (
//           <article className="post">
//             <h3 className="post-title">{response?.data.title}</h3>
//             <p className="post-body">
//               {response?.data.body}
//             </p>
//           </article>
//         )}
//       </div>
//     );
//   }
  