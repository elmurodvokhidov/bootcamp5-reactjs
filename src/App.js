
import RootLayouts from './layouts/RootLayouts';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Form from './pages/Form';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ContactLayout from './layouts/ContactLayout';
import NotFound from './pages/NotFound';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayouts />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />}>
          <Route path='form' element={<Form />} />
          <Route path='help' element={<Help />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
