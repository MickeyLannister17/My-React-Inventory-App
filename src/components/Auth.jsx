import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

function Auth() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className="">
      <div className="bg-primary max-w-[1640px] mx-auto flex h-screen">
        <div className="flex justify-center items-center mx-auto shrink">
          <div className="flex flex-col min-w-[300px] sm:min-w-[500px] h-[400px] md:h-[500px] border border-dimWhite rounded">
            <div className="flex justify-center items-center mt-20">
              <h1 className="text-white font-serif font-bold text-3xl">
                Log<span className="text-red-900 font-mono">in</span>
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center md:py-12 py-8"
            >
              <input
                className="py-4 mb-5 text-center mt-2 min-w-[150px] md:min-w-[300px] h-[50px] rounded bg-primary border-2 border-dimWhite text-dimWhite"
                type="text"
                placeholder="Username"
              />

              <input
                className="py-2 text-center mt-2 min-w-[150px] md:min-w-[300px] h-[50px] rounded bg-primary border-2 border-dimWhite text-dimWhite"
                type="email"
                placeholder="Email"
              />
              <button
                className="text-white font-semibold mt-10 border-2 w-24 py-2 rounded border-dimWhite hover:bg-red-900 
                 transition duration-300 hover:ease-in hover:scale-110"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
