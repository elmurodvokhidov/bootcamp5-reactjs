import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./layouts/RootLayout"
import Form from "./pages/Form"
import Edit from "./pages/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add',
          element: <Form />
        },
        {
          path: ':id',
          element: <Edit />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App