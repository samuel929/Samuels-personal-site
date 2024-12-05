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

            {/* Optional: Countdown or Call-to-action */}
            <div className='mt-8'>
              <a
                href='mailto:samlambo929@gmail.com'
                className='inline-block px-6 py-3 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-lg'
              >
                Contact Us
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
