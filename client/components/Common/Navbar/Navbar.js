import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill, BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthProvider";
const menuItems = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Services",
    path: "/services",
    id: 2,
  },
  {
    name: "Features",
    path: "/features",
    id: 3,
  },
  {
    name: "Teams",
    path: "/teams",
    id: 4,
  },
  {
    name: "About Us",
    path: "/about",
    id: 5,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 6,
  },
];

const Navbar = () => {
  const { user, logOut, token } = useContext(AuthContext);
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  useEffect(() => {
    setMounted(true);
    window.localStorage.setItem("theme", theme);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const themeChange = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (currentTheme === "dark") {
      return (
        <BsSunFill
          className="w-6 h-6 text-yellow-500 transition duration-500"
          role="button"
          onClick={themeChange}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="w-6 h-6 text-gray-200 "
          role="button"
          onClick={themeChange}
        />
      );
    }
  };

  return (
    <header className="sticky top-0 w-full mx-auto animate-in z-[100] ">
      <nav className="bg-[#00072d1b]/60 lg:w-full backdrop-blur-sm dark:backdrop-blur-sm border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[#00072d]/50 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/3dotit.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            3DotIt
                        </span> */}
            <button data-text="Awesome" className="button">
              <span className="actual-text">&nbsp;3Dotit&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;3DotIt&nbsp;
              </span>
            </button>
          </Link>

          {/* dektop menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              className={`flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 `}
            >
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`${item.path}`}
                    className={`${
                      router.asPath === item.path
                        ? "border-b-2 border-primary_btn text-primary_btn dark:text-primary_btn"
                        : ""
                    } block py-2 pr-4 pl-3 font-medium text-sm text-gray-200 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                {user ? (
                  <div className="flex justify-between items-center gap-3">
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="cursor-pointer">
                        {user.photoURL ? (
                          <Image
                            src={user.photoURL}
                            height={30}
                            width={30}
                            alt={user.displayName}
                            className="rounded-full"
                          />
                        ) : (
                          <BsPersonCircle className="text-3xl rounded-full text-green-600" />
                        )}
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <Link href="/user/profile">Profile</Link>
                        </li>
                        <li>
                          <button
                            onClick={logOut}
                            className="border border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black w-full my-3"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div>{renderThemeChanger()}</div>
                  </div>
                ) : (
                  <span className="flex justify-between items-center gap-3">
                    <Link href="/auth/login">
                      <button
                        className="border border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black md:w-fit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Login
                      </button>
                    </Link>
                    <Link href="/auth/register">
                      <button
                        className="border inline-block px-6 py-2.5 border-primary_btn hover:bg-primary_btn hover:text-black dark:hover:text-black dark:text-white text-gray-200 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  md:w-fit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Register
                      </button>
                    </Link>
                    <div>{renderThemeChanger()}</div>
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div className="block lg:hidden pb-2">
            <div className="relative flex justify-end items-center gap-3 sm:max-w-xl mx-auto">
              <div>{renderThemeChanger()}</div>
              <button
                className="text-gray-200 dark:text-white w-10 h-10 relative focus:outline-none bg-transparent"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <div className="block w-8 absolute gap-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                      isMenu ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-8 bg-current  transform transition duration-100 ease-in-out ${
                      isMenu ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                      isMenu ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenu && (
            <div
              className={`h-screen flex justify-between border-t-2 border-primary_btn  w-full mx-auto lg:hidden ${
                isMenu
                  ? "animate-in slide-in-from-left duration-300"
                  : "animate-out slide-out-from-left duration-300"
              } `}
            >
              <ul
                className={`flex flex-col justify-start items-center w-full mx-auto font-medium text-gray-200 dark:text-white`}
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`${item.path}`}
                      className={`${
                        router.asPath === item.path
                          ? "border-b-2 border-primary_btn text-primary_btn dark:text-primary_btn"
                          : ""
                      } block py-2 pr-4 pl-3 text-gray-200 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="flex flex-col lg:flex-row md:w-fit w-full justify-between items-center gap-3">
                    <Link href="/auth/login">
                      <button
                        className="border border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black md:w-fit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Login
                      </button>
                    </Link>
                    <Link href="/auth/register">
                      <button
                        className="border inline-block px-6 py-2.5 border-primary_btn hover:bg-primary_btn hover:text-black dark:hover:text-black dark:text-white text-gray-200 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  md:w-fit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Register
                      </button>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
