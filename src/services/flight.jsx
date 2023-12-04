import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const flightApi = createApi({
  reducerPath: "flightApi",
  baseQuery: fetchBaseQuery({
    baseURL: "https://api.schiphol.nl/public-flights",
    // baseURL: "/api",
    headers: {
      Accept: "application/json",
      resourceversion: "v4",
      app_id: "d2f1f641",
      app_key: "952348bf6881ff37260ff42587ae9775",
    },
  }),
  endpoints: (builder) => ({
    getFlightByName: builder.query({
      query: () => "/flights",
    }),
  }),
});


export const { useGetFlightByNameQuery } = flightApi;
