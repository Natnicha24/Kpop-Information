import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
function Root() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root

// import { Outlet } from "react-router-dom";
// import Nav from "../components/Nav";

// function Root() {
//   return (
//     <div>
//       <Nav />
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Root
