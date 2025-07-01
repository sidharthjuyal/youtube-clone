import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
