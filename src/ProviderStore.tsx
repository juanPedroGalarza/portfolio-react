import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./features/store";

const ProviderStore: React.FC<{children:React.ReactNode}> = (props) => {
  return (
    <Provider store={store} {...props} />
  )
}
export default ProviderStore