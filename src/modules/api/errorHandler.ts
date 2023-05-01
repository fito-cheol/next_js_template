import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
// https://dev.to/vikirobles/how-to-create-an-auth-login-system-with-axios-interceptors-typescript-2k11

const logOnDev = (message: string) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
    console.log(message);
  }
};

const onError = async (message: string) => {
  // TODO: redux에 저장하기
  return Promise.resolve();
};

function handleError(error: AxiosError | Error) {
  if (!axios.isAxiosError(error)) {
    logOnDev(`🚨 [API] | Error ${error.message}`);
    onError(error.message);
    return;
  }
  const { message } = error;
  const { method, url } = error.config as AxiosRequestConfig;

  if (!error.response) {
    logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error status Undefined ${message}`);
    onError('알 수 없는 오류가 발생했습니다.');
    return;
  }

  const { status } = error.response as AxiosResponse;

  logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);

  switch (status) {
    case 401: {
      onError('로그인이 필요합니다.');
      break;
    }
    case 403: {
      onError('권한이 없습니다.');
      break;
    }
    case 404: {
      onError('잘못된 요청입니다.');
      break;
    }
    case 500: {
      onError('서버에 문제가 발생했습니다.');
      break;
    }
    default: {
      onError('알 수 없는 오류가 발생했습니다.');
      break;
    }
  }
}

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;
  if (method === 'get') {
    config.params = {
      ...config.params,
      _t: Date.now(),
    };
    config.timeout = 15000;
  }
  return config;
};

const onResponseSuccess = (response: AxiosResponse) => {
  return response;
};

const onResponseError = (error: AxiosError | Error): Promise<AxiosError> => {
  handleError(error);

  return Promise.reject(error);
};

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest);

  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);

  return axiosInstance;
}
