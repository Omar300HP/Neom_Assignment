import AuthProvider from "./AuthProvider";
import { ReduxProvider } from "./store";

const Providers = ({ children }: { children?: React.ReactNode }) => (
  <ReduxProvider>
    <AuthProvider>{children} </AuthProvider>
  </ReduxProvider>
);

export default Providers;
