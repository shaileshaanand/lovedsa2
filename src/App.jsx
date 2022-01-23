import { useRoutes } from "raviger";
import React from "react";
import Navbar from "./components/Navbar";
import { routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  let route = useRoutes(routes);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div>
        <Navbar />
        {route}
        <Footer />
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ style: { color: "#14213D" } }}
      />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default App;
