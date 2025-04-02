import { useRouteError } from "react-router";

const ErrorRoute = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>{err.status}</h1>
      <p>Page not found</p>
      <p>{err.statusText || err.message}</p>
    </div>
  );
};

export default ErrorRoute;
