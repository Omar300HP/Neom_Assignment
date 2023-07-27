import { appConfig } from "./appConfig";

export const checkIsNoAuthRequired = (path: string): boolean =>
  appConfig.routesWithNoAuth.some((el) => el === path);
