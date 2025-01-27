import GroupList from "./components/GroupList";
import SearchBar from "./components/SearchBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import ShowDetail from "./components/ShowDetail";
import DetailLoader from "./loader/DetailLoader";
import { GroupListLoader } from "./loader/GroupListLoader";

const router=createBrowserRouter([
{
  path:'/',
  element:<Root />,
  children:[
    {
      index:true,
      element:(
        <div>
          {/* <SearchBar /> */}
          <GroupList />
        </div>
      ),
      loader:GroupListLoader
    },
    {
      path:'/detail/:id',
      element:<ShowDetail />,
      loader:DetailLoader
    }
  ]
}  
  
  
])


function App() {
return(
  <RouterProvider router={router}  />
)
}

export default App;
