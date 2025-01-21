import GroupList from "./components/GroupList";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import ShowDetail from "./components/ShowDetail";
import type { GroupType } from "./data-interface/GroupType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <div>
            <SearchBar />
            <GroupList />
          </div>
        ),
      },
      {
        path: "/detail/:groupname",
        element:<ShowDetail />
      },
    ],
  },
]);

function App() {
return(
  <div>
    <Nav />
    <div>
      {/* <SearchBar /> */}
      <GroupList />
    </div>
  </div>
  // <RouterProvider router={router} />
)

  // return (
  //   <div>
  //     <Nav />
  //     <div>
  //       <SearchBar />
  //       <GroupList />
  //     </div>
  //   </div>
  // );
}

export default App;
