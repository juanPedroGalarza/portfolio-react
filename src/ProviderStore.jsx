import { Provider } from "react-redux";
import { store } from "./features/store";

export default function ProviderStore(props) {
  return (
    <Provider store={store} {...props}>
      {props.children}
    </Provider>
  )
}