import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../Sevices/Cryptoapi";
import { cryptoNewsApi } from "../Sevices/cryptoNewsApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
})