import { useRouteError } from "react-router-dom";

interface ErrorType {
  statusText?: string;
  message?: string;
  // Add any other properties you expect the error object to have
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
// import React from "react";
// import { useRouteError, RouteError } from "react-router-dom";

// export default function ErrorPage(): JSX.Element {
//   const error: RouteError = useRouteError();
//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }
