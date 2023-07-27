import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { baseApi } from "../../services/api/base";
import { authReducer } from "../../features/auth";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
