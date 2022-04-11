// import React from "react";
// import { Navigate, Route, useLocation } from "react-router-dom";
// import jsCookie from "js-cookie";
// const AuthenticatedRoute = ({ element: Component, ...rest }) => {
//   const location = useLocation();

//   return (
//     {
//         jsCookie.get('login') === 'true' 
//         ?(<Route {...rest} element={<Component />} />)
//         :(<Navigate to="/" replace />)
//     }
//   );
// };

// export default AuthenticatedRoute;