import React, { useEffect, useState } from "react";
import Sam from "../../public/profile.jpg";

const IndexPage = () => {
  const calculateAge = () => {
    const today = new Date();
    let age = today.getFullYear() - 1998;

    // Check if the birthday has occurred this year
    const birthDateThisYear = new Date(today.getFullYear(), 8 - 1, 25);
    if (today < birthDateThisYear) {
      age--;
    }

    return age;
  };

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(currentYear, 8 - 1, 25);

    const timeUntilNextBirthday = nextBirthday - today;

    const timer = setTimeout(() => {
      setAge(age + 1);
    }, timeUntilNextBirthday);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-6 pb-8 md:space-x-5'>
        <h1
          className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl
  md:leading-14
  '
        >
          Home
        </h1>
      </div>
      <div className='items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          {/* <img
            src={Sam}
            alt='Samuel Madigage'
            className='h-48 w-48 rounded-full object-cover object-top'
          /> */}
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            Samuel Madigage
          </h3>
          <p className='text-gray-500 dark:text-gray-400 text-center'>
            Hey my name is Samuel Madigage and I am a Front End Developer
          </p>
          <div className='flex space-x-5 pt-6'>
            <a href='https://github.com/samuel929' target='_bank'>
              <svg
                viewBox='0 0 1024 1024'
                fill='currentColor'
                className='w-8 h-8 text-red-500 hover:text-red-500'
              >
                <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/samuel-madigage/'
              target='_bank'
            >
              <svg
                fill='currentColor'
                viewBox='0 0 16 16'
                className='w-8 h-8 text-red-500 hover:text-red-500'
              >
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>

            <a href='mailto:samlambo929@gmail.com' target='_bank'>
              <svg
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-8 h-8 text-red-500 hover:text-red-500'
              >
                <path d='M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5m1.4 3.5h11.2c.77 0 1.4.62 1.4 1.4v8.2a1.4 1.4 0 01-1.4 1.4H6.4c-.77 0-1.4-.63-1.4-1.4V7.9c0-.78.62-1.4 1.4-1.4M6 8v2l6 4 6-4V8l-6 4-6-4z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2'>
          <p>
            Hey everyone my name is Samuel Madigage,I am {age} years old and a
            Front End developer from South Africa
          </p>
          <p>
            I am a skilled JavaScript front-end developer with expertise in
            frameworks such as React, React Native, and Next.js. In addition to
            my front-end capabilities, I also have experience with backend
            technologies like Node.js. I have a passion for creating AI
            projects, blending my proficiency in development with innovative
            artificial intelligence solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
