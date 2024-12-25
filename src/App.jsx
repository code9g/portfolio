import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

const router = createMemoryRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
