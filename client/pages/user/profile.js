import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useRouter } from "next/router";
const profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const name = user?.displayName ? user.displayName : "";
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const cancleEdit = () => {
    setIsEdit(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    updateUser({ displayName: displayName }).then(() => {
      console.log("profile updated");
      setIsEdit(false);
    });
  };
  useEffect(() => {
    setDisplayName(name);
  }, [user]);

  return (
    <section className="bg-slate-100 dark:bg-primary relative">
      {isEdit && (
        <div className="absolute h-full w-full top-0 left-0 bg-red-500/20 z-2" />
      )}
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

              <div className="my-5  py-3 relative">
                <button
                  onClick={handleEdit}
                  className="btn text-gray-200 block w-full rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  {/* The button to open modal */}
                  Edit Profile
                </button>
                {isEdit && (
                  <form
                    onSubmit={handleSubmit}
                    className="absolute -top-52 w-full bg-primary/50 backdrop-blur-md rounded z-5 p-10"
                  >
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
                        className="pl-2 dark:text-white text-primary w-full outline-none border-none bg-transparent"
                        type="text"
                        placeholder="Full name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="flex justify-center gap-3 items-center">
                      <button
                        onClick={cancleEdit}
                        className="border border-primary bg-primary inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-white text-white w-full my-3"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Cancel
                      </button>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default profile;
