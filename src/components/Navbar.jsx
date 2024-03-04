

const Navbar = () => {
  return (
    <nav className=" bg-[#212731] mb-20">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="">Categories</a>
              </li>
              <li>
                <a>Website Builders</a>
              </li>
              <li>
                <a>Today's deals</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[14px] text-[#D1D6DA]">
            <div class="relative flex items-center   ">
              <span class="absolute">
                <button className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </span>

              <input
                type="email"
                placeholder=""
                class="block w-full py-2.5 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <li>
              <a className="">Categories</a>
            </li>
            <li>
              <a>Website Builders</a>
            </li>
            <li>
              <a>Today's deals</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div class="relative lg:hidden flex items-center   ">
            <span class="absolute">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>

            <input
              type="email"
              placeholder=""
              class="block w-full py-2.5 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;