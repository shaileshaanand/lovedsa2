import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { navigate } from "raviger";
import { useStats } from "../hooks/useStats";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [randomUser, setRandomUser] = useState(false);
  const { data, isLoading, error, refetch, isFetching } = useStats(username, {
    onSuccess: (data) => {
      if (data.info?.name) {
        toast.success(`Logged in as ${data.info.name}`);
        localStorage.setItem("username", username);
        navigate(`/${username}/essential`);
      } else {
        toast.error(`No user found for ${username}`);
      }
    },
    enabled: false,
  });

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      navigate(`/${username}/essential`);
    }
  }, []);

  useEffect(() => {
    if (randomUser) {
      refetch();
    }
  }, [randomUser]);

  return (
    <div className="">
      <p className="text-2xl text-center my-2 mx-6">
        Please login with your GeeksForGeeks id
      </p>
      <form
        className="flex flex-col max-w-md mx-3 gap-3 md:mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          username ? refetch() : toast.error("Please enter your GFG username");
        }}
      >
        <input
          type="text"
          placeholder="GeeksForGeeks Username"
          className="p-2 border-2 border-primary-300 rounded-lg outline-none"
          value={username}
          onChange={(e) => {
            !(isLoading || isFetching) && setUsername(e.target.value);
          }}
        />
        <Button>
          {isLoading || isFetching ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Login"
          )}
        </Button>
        <p
          className="text-center text-sm hover:underline cursor-pointer"
          onClick={() => {
            setUsername("NamanKhandelwal3");
            setRandomUser(true);
          }}
        >
          Login with a random username
        </p>
      </form>
    </div>
  );
};

export default Login;
