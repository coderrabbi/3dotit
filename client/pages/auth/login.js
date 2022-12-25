import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import Lottie from "lottie-react";
import loginImage from "../../assets/svgJSON/login.json";
import Link from "next/link";
import Head from "next/head";
import PageTitle from "../../components/Common/PageTitle/PageTitle";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
const login = () => {
  const [passShow, setPassShow] = useState(false);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn, handleGithubSignIn, signIn, setLoading, loading } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(email, password)
      .then(() => {
        setLoginUserEmail(email);
        setLoading(false);
        toast.success("Successfully Loggedin");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Please Login</title>
        <link rel="icon" href="/assets/3dotit.svg" />
      </Head>
      <div className="w-full mx-auto py-10">
        <PageTitle>Login</PageTitle>
        <div className="flex justify-center items-center gap-20 py-5">
          <div className="animate-in slide-in-from-left duration-500">
            <Lottie
              animationData={loginImage}
              className="h-[350px]"
              loop={true}
            />
          </div>
          <div className="animate-in slide-in-from-top duration-500 w-[350px]">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none bg-transparent"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="flex relative items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 focus:text-violet-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none bg-transparent"
                  type={`${passShow ? "text" : "password"}`}
                  name=""
                  id=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />
                <div className="absolute top-3 right-5">
                  {!passShow ? (
                    <BsFillEyeSlashFill
                      className="cursor-pointer"
                      onClick={() => setPassShow(!passShow)}
                    />
                  ) : (
                    <BsFillEyeFill
                      className="cursor-pointer"
                      onClick={() => setPassShow(!passShow)}
                    />
                  )}
                </div>
              </div>

              <button
                className="flex justify-center gap-5 mt-3 items-center w-full text-white bg-blue-500 hover:bg-blue-600 rounded py-2 px-3"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b-2 border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">OR</span>
              </div>
            </div>
            <div className="w-full">
              <button
                className="flex justify-center gap-5 items-center w-full text-white bg-blue-500 hover:bg-blue-600 rounded py-2 px-3"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={googleSignIn}
              >
                <FcGoogle className="w-6 h-6 bg-white rounded-full" />{" "}
                <span>Login With Google</span>
              </button>
              <div className="py-3">
                <span>Don't have an Account? </span>
                <Link
                  href="/auth/register"
                  passHref
                  className="text-blue-500 hover:text-blue-600"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
