import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
