import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const ProviderStore: React.FC<{ children: React.ReactNode }> = (props) => {
  return <Provider store={store} {...props} />;
};
export default ProviderStore;
