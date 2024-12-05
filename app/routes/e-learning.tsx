/* eslint-disable jsx-a11y/iframe-has-title */
import { CoolMode } from "../../@/components/magicui/cool-mode";

const ComingSoonPage = () => {
  return (
    <div className={`flex flex-col items-center justify-center h-screen px-4 `}>
      <div className='w-full max-w-md md:max-w-lg lg:max-w-xl mb-6'>
        <div>
          <iframe
            allow='fullscreen'
            frameBorder='0'
            src='https://giphy.com/embed/8nco3WHQqu2DVnNigD/video'
            className='w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg'
          ></iframe>
        </div>
      </div>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center'>
        COMING SOON
      </h1>
      <div className='relative'>
        <CoolMode>
          <button className='relative z-10 px-4 py-2 md:px-6 md:py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg  focus:outline-none'>
            Click Me!
          </button>
        </CoolMode>
      </div>
    </div>
  );
};

export default ComingSoonPage;
