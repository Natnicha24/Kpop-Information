import GroupList from "./components/GroupList";
import SearchBar from "./components/SearchBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import ShowDetail from "./components/ShowDetail";

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
  <RouterProvider router={router} />
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
