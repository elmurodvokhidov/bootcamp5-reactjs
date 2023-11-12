import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
