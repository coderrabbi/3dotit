import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const name = user?.displayName ? user.displayName : "";
  const [displayName, setDisplayName] = useState(name);
  const handleSubmit = (event) => {
    event.preventDefault();

    updateUser({ displayName: displayName }).then(() => {
      console.log("profile updated");
    });
  };
  useEffect(() => {}, [user]);

  return (
    <section className="bg-slate-100">
      <div className="container mx-auto py-32">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div className="flex justify-center">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://picsum.photos/200/300?random=1"
                }
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              {user?.emailVerified === false ? (
                <p className="text-sm text-red-500 text-center font-semibold">
                  Please Varify your email
                </p>
              ) : (
                <p className="text-sm text-green-500 text-center font-semibold">
                  Email Verified
                </p>
              )}

              <h1 className="font-bold text-center text-3xl text-gray-900">
                {user?.displayName}
              </h1>
              <p className="text-center text-sm text-gray-400 font-medium">
                {user?.email ? user.email : "Email not found"}
              </p>
              <p className="text-center text-sm text-gray-400 font-medium">
                <span>
                  <b>Account Created At: {user?.metadata.creationTime}</b>
                </span>
              </p>

              <div className="my-5 px-6 py-3">
                <button className="btn text-gray-200 block w-full rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                  {/* The button to open modal */}
                  <a href="#my-modal-2">Edit Profile</a>
                </button>
                <div className="modal" id="my-modal-2">
                  <div className="modal-box ">
                    <h3 className="font-bold text-lg py-3">
                      Update your Profile Name
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="flex items-center border-2 py-2 px-3 w-full rounded-2xl mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <input
                          className="pl-2 w-full outline-none border-none bg-transparent"
                          type="text"
                          placeholder="Full name"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="modal-action">
                        <a
                          href="#"
                          className="border border-primary bg-primary inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-white w-full my-3"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Cancel
                        </a>
                        <button
                          type="submit"
                          className="border text-center border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black w-full my-3"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default profile;
