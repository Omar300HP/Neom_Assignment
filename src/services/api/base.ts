import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import type { SerializedError } from "@reduxjs/toolkit";
import axiosInstance from "../../libs/axios";
import type { AxiosError, AxiosRequestConfig } from "axios";

type BaseQueryFnParams = {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
};

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    BaseQueryFnParams,
    any,
    SerializedError | undefined | { code: number | undefined; message: unknown }
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: { ...(headers || {}) },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: err.response?.data || err.message,
        },
      };
    }
  };

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: () => ({}),
  tagTypes: [],
});
