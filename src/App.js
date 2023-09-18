import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./components/chat";
import Payment from "./components/payment";
import Success from "./components/Success";
import UserList from "./components/userList";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Chat />,
    },

    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/user",
      element: <UserList />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
