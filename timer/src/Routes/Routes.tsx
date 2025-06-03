import Home from "../Pages/Home/Home";

interface RoutesProps {
  component: () => JSX.Element | null;
  sidebar: () => JSX.Element | null;
  path: string;
}

const routes: RoutesProps[] = [
  {
    path: "/",
    component: () =>  <Home />,
    sidebar: () =>  null,
  },
];

export default routes;
