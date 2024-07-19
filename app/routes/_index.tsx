import BlurIn from "@/components/magicui/blur-in";
import { Globe } from "../components/Globe";
import { SocialLinks } from "~/components/Dock";
const IndexPage = () => {
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
        <div className='flex flex-col items-center'>
          {/* <img
            src={Sam}
            alt='Samuel Madigage'
            className='h-48 w-48 rounded-full object-cover object-top'
          /> */}
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            <BlurIn word={"Samuel Madigage"}></BlurIn>
          </h3>
          <p className='text-gray-500 dark:text-gray-400 text-center'>
            Hey my name is Samuel Madigage and I am a Front End Developer
          </p>
          <div className='flex space-x-5 pt-6'>
            <SocialLinks />
          </div>
        </div>
        <div className='prose max-w-none prose-lg  pb-8 dark:prose-invert xl:col-span-2'>
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
