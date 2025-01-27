import GroupListShow from "./GroupListShow";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import type { GroupListLoaderProps } from "../loader/GroupListLoader";


function GroupList() {

  const {allgroups}=useLoaderData() as GroupListLoaderProps

  const renderData = allgroups.map((data) => {
    return (
      <Link to={`/detail/${data.Id}`}
      className="col-span-2" key={data.Id}>
        <GroupListShow  group={data} /> 
      </Link>
    );
  });

  return (
    <div className=" bg-customGrey py-2 px-10">
      <div className="font-Mali mt-6 font-bold m-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-10 ">
        {renderData}
      </div>
    </div>
  );
}

export default GroupList;
