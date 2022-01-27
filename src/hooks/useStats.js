import { useQuery } from "react-query";
export const useStats = (username, config) => {
  return useQuery(
    "stats",
    () =>
      fetch(`https://geeks-for-geeks-api-lyart.vercel.app/${username}`).then(
        (res) => {
          return res.json();
        }
      ),
    config
  );
};
