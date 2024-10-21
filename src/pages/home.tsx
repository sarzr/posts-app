import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <main className="w-full mx-5 mt-24 mb-9">
      <div className="flex gap-4 xl:gap-8 flex-wrap lg:flex-nowrap justify-center lg:justify-normal md:mx-3">
        <div className="w-full md:w-3/4 lg:w-2/3 mb-2 lg:mb-8 p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
              User List
            </h5>
            <Link
              to={"/users"}
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </Link>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="../public/images/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-700 dark:text-white">
                    admin
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="../public/images/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-700 dark:text-white">
                    admin
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="../public/images/profile-picture-2.jpg"
                      alt="Michael image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-700 dark:text-white">
                    moderator
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="../public/images/profile-picture-4.jpg"
                      alt="Lana image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Lana Byrd
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-700 dark:text-white">
                    user
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="../public/images/profile-picture-5.jpg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-semibold text-gray-700 dark:text-white">
                    user
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3">
          <div className="shadow-md bg-white rounded-xl w-full py-3 mr-6 px-4 mb-6">
            <div className="flex items-center gap-3">
              <img
                src="../public/images/profile-picture-2.jpg"
                alt="Michael image"
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full"
              />
              <div className="overflow-hidden">
                <p className="sm:text-lg font-semibold text-gray-700 capitalize truncate">
                  Michael Gough
                </p>
                <p className="text-xs font-semibold text-gray-500 truncate">
                  email@windster.com
                </p>
              </div>
            </div>
            <p className="truncate text-gray-700 capitalize sm:text-lg font-semibold pt-3 pb-1">
              Dave wasn't exactly sure how he had ended up
            </p>
            <p className="text-justify text-xs sm:text-sm font-medium text-gray-500">
              Dave wasn't exactly sure how he had ended up in this predicament.
              He ran through all the events that had lead to this current
              situation and it still didn't make sense. He wanted to spend some
              time to try and make sense of it all, but he had higher priorities
              at the moment. The first was how to get out of his current
              situation of being naked in a tree with snow falling all around
              and no way for him to get down.
            </p>
            <div className="flex flex-wrap pt-4 gap-2">
              <div className="bg-slate-200 px-2 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
                classic
              </div>
              <div className="bg-slate-200 px-2 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
                english
              </div>
              <div className="bg-slate-200 px-2 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
                american
              </div>
            </div>
            <div className="flex pt-4 gap-x-4">
              <div className="flex items-center gap-x-1 text-gray-600">
                <BiLike className="w-5 h-5" />
                <span className="text-xs">15</span>
              </div>
              <div className="flex items-center gap-x-1 text-gray-600">
                <BiDislike className="w-5 h-5" />
                <span className="text-xs">8</span>
              </div>
              <div className="flex items-center gap-x-1 text-gray-600">
                <IoMdEye className="w-5 h-5" />
                <span className="text-xs">38</span>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto text-center lg:pb-4 xl:pt-3 xl:pb-0 mb-6 lg:px-6 hidden md:block">
            <dl className="grid max-w-screen-md gap-4 xl:gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center bg-gray-50 shadow py-5 xl:py-6 rounded-lg text-gray-700">
                <dt className="mb-2 text-xl xl:text-2xl font-medium">80M+</dt>
                <dd className="dark:text-gray-400 text-sm xl:text-base">
                  Users
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-50 shadow py-5 xl:py-6 rounded-lg text-gray-700">
                <dt className="mb-2 text-xl xl:text-2xl font-medium">145K+</dt>
                <dd className="dark:text-gray-400 text-sm xl:text-base">
                  Posts
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-50 shadow py-5 xl:py-6 rounded-lg text-gray-700">
                <dt className="mb-2 text-xl xl:text-2xl font-medium">10M+</dt>
                <dd className="dark:text-gray-400 text-sm xl:text-base">
                  contributors
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap justify-center lg:justify-normal md:mx-3">
        <div className="shadow-md w-full md:w-3/4 lg:w-1/2 bg-white rounded-xl py-4 px-6">
          <p className="truncate text-gray-700 capitalize sm:text-lg font-semibold py-2">
            The trees, therefore, must be such old
          </p>
          <p className="text-justify text-xs sm:text-sm font-medium text-gray-500">
            The trees, therefore, must be such old and primitive techniques that
            they thought nothing of them, deeming them so inconsequential that
            even savages like us would know of them and not be suspicious. At
            that, they probably didn't have too much time after they detected us
            orbiting and intending to land. And if that were true, there could
            be only one place where their civilization was hidden
          </p>
          <div className="flex flex-wrap pt-4 gap-2">
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              crime
            </div>
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              fiction
            </div>
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              love
            </div>
          </div>
          <div className="flex items-center pt-5 gap-x-4">
            <div className="flex items-center gap-x-1 text-gray-600">
              <BiLike className="w-5 h-5" />
              <span className="text-xs">951</span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-600">
              <BiDislike className="w-5 h-5" />
              <span className="text-xs">12</span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-600">
              <IoMdEye className="w-5 h-5 text-gray-500" />
              <span className="text-xs">2911</span>
            </div>
          </div>
        </div>
        <div className="shadow-md w-full md:w-3/4 lg:w-1/2 bg-white rounded-xl py-4 px-6">
          <p className="truncate text-gray-700 capitalize sm:text-lg font-semibold py-2">
            I'm going to hire professional help tomorrow.
          </p>
          <p className="text-justify text-xs sm:text-sm font-medium text-gray-500">
            I'm going to hire professional help tomorrow. I can't handle this
            anymore. She fell over the coffee table and now there is blood in
            her catheter. This is much more than I ever signed up to do. I'm
            going to hire professional help tomorrow. I can't handle this
            anymore. She fell over the coffee table and now there is blood in
            her catheter. This is much more than I ever signed up to do.
          </p>
          <div className="flex flex-wrap pt-4 gap-2">
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              mystery
            </div>
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              classic
            </div>
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              american
            </div>
          </div>
          <div className="flex items-center pt-5 gap-x-4">
            <div className="flex items-center gap-x-1 text-gray-600">
              <BiLike className="w-5 h-5" />
              <span className="text-xs">1350</span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-600">
              <BiDislike className="w-5 h-5" />
              <span className="text-xs">40</span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-600">
              <IoMdEye className="w-5 h-5 text-gray-500" />
              <span className="text-xs">4419</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
