import { UserPage } from "./pages/User/Index";
import { AsideBar } from "./components/AsideBar/AsideBar";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./pages/Error";

function App() {

  const router = createBrowserRouter([
    {
      element:
        <>
          <Header />
          <div className='mainContainer'>
            <AsideBar />
            <main>
              <Outlet />
            </main>
          </div>
        </>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/user/:id",
          element: <UserPage />
        },
        {
          path: '*',
          element: <ErrorPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;