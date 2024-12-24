import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
);

const router = createMemoryRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
