import React from "react";
import App, { AppProps, AppContext } from "next/app";
import ErrorPage from "@/app/(cart)/404";
import { useRouter } from "next/router";
const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  try {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  } catch (error: any) {
    // Check if ctx.res is defined before accessing it
    if (ctx.res) {
      // Check for specific error types and redirect accordingly
      if (error.message.includes("404")) {
        ctx.res.statusCode = 404; // Set status code to 404 for 404 errors
        return { pageProps: {} };
      } else {
        // Handle other types of errors here (e.g., network errors, server errors)
        ctx.res.statusCode = 500; // Set status code to 500 for other errors
        return { pageProps: {} };
      }
    } else {
      // Handle the case when ctx.res is undefined (e.g., during server-side rendering)
      return { pageProps: {} };
    }
  }
};

export default MyApp;
