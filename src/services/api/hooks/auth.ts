import { baseApi } from "../base";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({
        reqBody,
      }: {
        reqBody: {
          email: string;
          password: string;
        };
      }) => ({
        url: "https://reqres.in/api/login",
        method: "POST",
        data: reqBody,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = extendedApi;
