import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");

  const navigate = useNavigate();

  const onClickMenu = () => {
    setMenuOpen(() => !menuOpen);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/posts/search?q=${search}`);
  };

  return (
    <>
      <header className="bg-gray-50 shadow-sm z-10 absolute w-fit">
        {/* for desktop */}
        <nav className="mx-auto sm:flex items-center justify-between py-3 px-5 lg:px-8 hidden">
          <form onSubmit={onSubmitHandler}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block outline-none w-full py-[9px] pl-9 pr-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </div>
          </form>

          <div className="text-gray-500 flex gap-4 items-center">
            <IoNotifications className="w-5 h-5" />
            <IoLogoGithub className="w-5 h-5" />
            <a
              href="#"
              className="text-gray-800 ml-1 text-sm font-medium py-1 px-3 rounded-full bg-gray-200"
            >
              Login
            </a>
          </div>
        </nav>

        {/* for mobile */}
        <div className="sm:hidden mx-auto max-w-[1200px] py-3 px-5 lg:px-8">
          <div className="flex justify-between items-center gap-6">
            <div className="text-gray-500 flex gap-4 items-center">
              <FaBars onClick={onClickMenu} className="cursor-pointer" />
              <IoNotifications className="w-5 h-5" />
              <IoLogoGithub className="w-5 h-5" />
            </div>

            <form onSubmit={onSubmitHandler}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block outline-none w-full py-[9px] pl-9 pr-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>

          {menuOpen && (
            <div className="w-full bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <button className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Home
                      </button>
                      <Link
                        to={"/users"}
                        className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Users
                      </Link>
                      <Link
                        to={"/posts"}
                        className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Posts
                      </Link>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
