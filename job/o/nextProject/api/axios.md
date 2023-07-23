```ts
import { cloneDeep } from "lodash";
import axios from "axios";
import { getCookie, setCookie } from "utils/cookie";
import { showSnackbar } from "@/utils/functions";
import { ERROR_CODES } from "@/utils/constants";

const createInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use((config) => {
    const cookie = getCookie(process.env.NEXT_PUBLIC_TOKEN_KEY);
    const newConfig = cloneDeep(config);
    if (cookie) {
      newConfig.headers.Authorization = `Bearer ${cookie}`;
    }
    return newConfig;
  });

  instance.interceptors.response.use(
    (res) => {
      const errorCode = res.data.error;
      if (!errorCode) {
        // 若 token 過期，response 會帶 _token，
        // 這一次 request 仍算，下一次之後就要用新 token
        // eslint-disable-next-line no-underscore-dangle
        const newToken = res.data.token;
        if (newToken) {
          setCookie(process.env.NEXT_PUBLIC_TOKEN_KEY, newToken);
        }
        return res.data;
      }
      showSnackbar(
        ERROR_CODES?.[errorCode as keyof typeof ERROR_CODES] || errorCode,
        "error"
      );
      throw errorCode;
    },
    (error) => error
  );

  return instance;
};

export default createInstance;
```
