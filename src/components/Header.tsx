import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white">
        {/* for desktop */}
        <nav
          className="mx-auto flex max-w-[1200px] items-baseline justify-start p-5 lg:px-8"
          aria-label="Global"
        >
          <div className="font-semibold text-lg text-gray-800 mr-10 ml-2">Logo</div>
          <div className="hidden sm:flex sm:gap-x-12">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                aria-expanded="false"
              >
                Home
              </button>
            </div>

            <Link to={"/users"}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Users
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Posts
            </a>
          </div>
        </nav>

        {/* for mobile */}
        <div className="hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="mt-2 space-y-2" id="disclosure-1">
                    <a
                      href="#"
                      className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Users
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Posts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
