import { useEffect, useState } from "react";

import { useTheme } from "remix-themes";

const IndexPage = () => {
  const [theme] = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='relative z-10 divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-x-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            Home
          </h1>
        </div>
        <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center'>
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
              Samuel Madigage
            </h3>
            <p className='text-gray-500 dark:text-gray-400 text-center'>
              Hey my name is Samuel Madigage and I am a Front End Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
