import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const login = () => {
  const [passShow, setPassShow] = useState(true);
  return (
    <Layout>
      <form>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            autoComplete="off"
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type={`${passShow ? "text" : "password"}`}
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            autoComplete="off"
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <div className="absolute top-3 right-5">
            {passShow ? (
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
      </form>
      <div class="relative py-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-b-2 border-gray-300"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-sm text-gray-500">OR</span>
        </div>
                  
      </div>
    </Layout>
  );
};

export default login;
