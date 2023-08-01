import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api" }),
  tagTypes: ["Count"],
  endpoints: (builder) => ({
    getCount: builder.query({
      query: ({ name }) => `count/${name}`,
      providesTags: (result, error, arg) => [{ type: "Count", id: arg.name }],
    }),
    setCount: builder.mutation({
      query: ({ name, value }) => ({
        url: `count/${name}`,
        method: "POST",
        body: { value },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Count", id: arg.name },
      ],
    }),
  }),
});
