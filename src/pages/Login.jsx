import React, { useState } from "react";
import Button from "../components/Button";
import { navigate } from "raviger";
import { useStats } from "../hooks/useStats";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const { data, isLoading, error, refetch, isFetching } = useStats(username, {
    onSuccess: (data) => {
      // toast.success("Successfully logged in!");
      if (data.info?.name) {
        console.log("Successfully logged in!");
        toast.success(`Logged in as ${data.info.name}`);
        navigate(`/${username}`);
      } else {
        toast.error(`No user found for ${username}`);
        setUsername("");
      }
    },
    enabled: false,
  });
  return (
    <div className="">
      <p className="text-2xl text-center my-2 mx-6 mt-40">
        Please login with your GeeksForGeeks id
      </p>
      <form
        className="flex flex-col max-w-md mx-3 gap-3 md:mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        <input
          type="text"
          placeholder="GeeksForGeeks Username"
          className="p-2 border-2 border-primary-300 rounded-lg outline-none"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button text="Login" loading={isLoading || isFetching} />
      </form>
    </div>
  );
};

export default Login;
