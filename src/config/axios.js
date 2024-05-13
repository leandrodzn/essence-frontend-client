import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BACKEND,
});

const defaultHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return {
    Authorization: token ? `Bearer ${token}` : null,
  };
};

axiosApi.interceptors.request.use(
  function (config) {
    var hh = defaultHeaders();
    for (var k in hh) {
      if (hh[k] != null) {
        config.headers[k] = hh[k];
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      router.push("/login");
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

function buildFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

const api = {
  api: axiosApi,
  baseURL: import.meta.env.VITE_APP_API_BACKEND,
  defaultHeaders: defaultHeaders,
  get: (path, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        let resource = await axiosApi.get(path, { params: params ?? {} });

        resolve(resource?.data ?? {});
      } catch (error) {
        reject(error?.response?.data ?? error?.response ?? error);
      }
    });
  },
  post: (path, data, isMultipart, params) => {
    return new Promise(async (resolve, reject) => {
      let formData = data;

      let config = {
        params: params ?? {},
      };

      if (data != null && isMultipart) {
        formData = new FormData();

        buildFormData(formData, data);

        config.headers = defaultHeaders();
        config.headers["content-type"] = "multipart/form-data";
      }

      try {
        let resource = await axiosApi.post(path, formData, config);
        resolve(resource?.data ?? {});
      } catch (error) {
        reject(error?.response?.data ?? error?.response ?? error);
      }
    });
  },
  put: (path, data, isMultipart, params) => {
    return new Promise(async (resolve, reject) => {
      let formData = data;

      let config = {
        params: params ?? {},
      };

      if (data != null && isMultipart) {
        formData = new FormData();

        buildFormData(formData, data);

        config.headers = defaultHeaders();
        config.headers["content-type"] = "multipart/form-data";
      }

      try {
        let resource = await axiosApi.put(path, formData, config);
        resolve(resource?.data ?? {});
      } catch (error) {
        reject(error?.response?.data ?? error?.response ?? error);
      }
    });
  },
  delete: (path, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        let resource = await axiosApi.delete(path, {
          data: params ?? undefined,
        });

        resolve(resource?.data ?? {});
      } catch (error) {
        reject(error?.response?.data ?? error?.response ?? error);
      }
    });
  },
  addResponseInterceptor: (onResponse, onError) => {
    let onResponseCB = onResponse
      ? onResponse
      : (response) => {
          return response;
        };

    let onErrorCB = onError
      ? onError
      : (errror) => {
          return Promise.reject(errror);
        };

    return axiosApi.interceptors.response.use(onResponseCB, onErrorCB);
  },
  removeResponseInterceptor: (id) => {
    axiosApi.interceptors.response.eject(id);
  },
};

export default api;
