import Login from "./pages/Login";
import Stats from "./pages/Stats";

export const routes = {
  "/": () => <Login />,
  // "/login": () => <Login />,
  "/:username/full": ({ username }) => <Stats username={username} />,
  "/:username/essential": ({ username }) => (
    <Stats username={username} essential />
  ),
};
