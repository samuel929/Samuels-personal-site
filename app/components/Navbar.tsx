import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

const Navbar = () => {
  // Assuming you have a type definition for Theme
  type Theme = "light" | "dark";

  // In your component
  const [theme, setTheme] = useState<Theme | null>(null);
  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex justify-between w-full'>
                <div className='flex items-center'>
                  <Link to='/'>
                    <h1 className='text-2xl font-medium'>
                      Samuels<span className='text-red-500'>Madigage</span>
                    </h1>
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-red-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to='/'
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-red-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to='/blog'
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-red-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to='/project'
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-red-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to='/e-learning'
                  >
                    EduPortal
                  </NavLink>
                  <button
                    onClick={() =>
                      setTheme((prev: Theme | null) =>
                        prev === "dark" ? "light" : "dark"
                      )
                    }
                  >
                    {theme === "dark" ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6 text-gray-500'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                <button
                  className='mr-4'
                  onClick={() =>
                    setTheme((prev: Theme | null) =>
                      prev === "dark" ? "light" : "dark"
                    )
                  }
                >
                  {theme === "dark" ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6 text-gray-500'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                      />
                    </svg>
                  )}
                </button>
                <Disclosure.Button
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-300
       focus:outline-none focus:ring-2 focus:ring-teal-500 dark:hover:bg-gray-800
       '
                >
                  {open ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18 18 6M6 6l12 12'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover-gray-700"
                }
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover-gray-700"
                }
                to='/blog'
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover-gray-700"
                }
                to='/project'
              >
                Projects
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-50 border-red-500 text-red-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover-gray-700"
                }
                to='/e-learning'
              >
                EduPortal
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
