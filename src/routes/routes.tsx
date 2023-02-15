import Layout from "../components/Layout/layout";
import Home from "../views/Home";

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        name: "Página inicial",
        element: <Home />,
      },
    ],
  },
];

export default routesConfig;
