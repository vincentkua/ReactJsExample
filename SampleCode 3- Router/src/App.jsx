import { Provider } from "react-redux";
import store from "./reduxstorage";
import ReduxExample from "./ReduxExample";
import Sample from "./Sample";
import Count from "./Count";

import { createHashRouter, RouterProvider } from "react-router-dom";
import RootPage from "./RootPage";
import { Link } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>About Me!</h1>
            <Link to={"/hobbies"}>Go to Hobbies</Link>
          </div>
        ),
      },
      {
        path: "countapp",
        element: <Count />,
      },
      {
        path: "rock-paper-scissors",
        element: <h1>Rock Paper Scissors</h1>,
      },
    ],
  },
]);

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
