import { useEffect } from "react";

export default function Custom404() {
  const redirect = () => {
    sessionStorage.setItem('path', location.pathname);
    location.replace('./');
  };
  useEffect(() => {
    redirect();
  }, []);

  return (
    <>
      <h1>loading...</h1>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404</title>
      </head>
    </>
  )
}