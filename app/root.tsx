import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import "./tailwind.css";
import { LoaderFunctionArgs, json, LinksFunction } from "@remix-run/node";
import { themeSessionResolver } from "./utils/session.server";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { ReactNode } from "react";

import { Toaster } from "../@/components/ui/toaster";
import { motion } from "framer-motion";

export function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage = "Something went wrong";
  let errorDetails = "";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data || "Something went wrong";
    errorDetails = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errorMessage = error.message;
    errorDetails = error.stack as any;
  }

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
        <title>Something went wrong</title>
      </head>
      <body className='bg-pink-50'>
        <div className='min-h-screen flex items-center justify-center p-4'>
          <div className='text-center p-8 max-w-md'>
            {/* Sad face document icon using basic shapes */}
            <div className='mx-auto mb-6 w-16 h-20 relative bg-pink-200 rounded-lg'>
              <div className='absolute top-4 left-4 w-1 h-1 bg-pink-400 rounded-full'></div>
              <div className='absolute top-4 right-4 w-1 h-1 bg-pink-400 rounded-full'></div>
              <div className='absolute bottom-4 left-1/2 w-6 h-1 -ml-3 bg-pink-400 rounded-full'></div>
              <div className='absolute -right-1 -top-1 w-3 h-3 bg-pink-200 transform rotate-45'></div>
            </div>

            {/* Error messages */}
            <h1 className='text-2xl font-medium text-gray-800 mb-2'>
              Something went wrong!!!!
            </h1>
            <p className='text-gray-500 mb-8'>
              We are already working on fixing it
            </p>

            {/* Development-only error details */}
            {process.env.NODE_ENV === "development" && errorDetails && (
              <div className='mt-4 p-4 bg-pink-100 rounded-lg text-left'>
                <details className='cursor-pointer'>
                  <summary className='text-sm font-medium text-pink-900'>
                    Error Details
                  </summary>
                  <pre className='mt-2 text-xs text-pink-800 overflow-auto p-2'>
                    {errorDetails}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  // ...
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return json({
    theme: getTheme(),
  });
}

export default function AppWithProvider() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction='/action/set-theme'>
      <App />
    </ThemeProvider>
  );
}

function App() {
  const [theme] = useTheme();

  return (
    <html lang='en' data-theme={theme ?? ""}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3829158537608414'
          crossOrigin='anonymous'
        ></script>

        <Links />
      </head>
      <body className='bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 flex flex-col justify-center'>
        <Layout>
          <div className='text-center p-8 '>
            {/* Animated Icon */}
            <motion.div
              className='relative mx-auto mb-8 w-24 h-24'
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            >
              <div className='absolute inset-0 border-4 border-t-pink-500 border-pink-200 rounded-full'></div>
            </motion.div>

            {/* Heading */}
            <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
              We're Building Something Amazing
            </h1>
            <p className='text-gray-600 dark:text-gray-300'>
              Our website is currently under construction. Stay tuned for
              updates!
            </p>
            <p className='text-gray-600 dark:text-gray-300'>
              Connect with us on Discord Now! Click the Icon below
            </p>
            <div className='flex justify-center'>
              <a href='https://discord.gg/Keja3YX8'>
                <svg
                  fill='#FF69B4' // Replace 'currentColor' with your color code
                  viewBox='0 0 16 16'
                  height='10em'
                  width='10em'
                  className='bg-t-pink-500'
                >
                  <path d='M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z' />
                </svg>
              </a>
            </div>
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

export { App };

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-dvh'>
        {children}
      </main>
      <Toaster />
    </div>
  );
}
