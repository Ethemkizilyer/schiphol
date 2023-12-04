import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { flightApi } from "./services/flight";

export const store = configureStore({
  reducer: {

    [flightApi.reducerPath]: flightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware),
});


setupListeners(store.dispatch);
