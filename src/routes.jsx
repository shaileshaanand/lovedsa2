import Login from "./pages/Login";
import Stats from "./pages/Stats";

export const routes = {
  "/": () => <Login />,
  // "/login": () => <Login />,
  "/:username": ({ username }) => <Stats username={username} />,
};
