import GroupListShow from "./GroupListShow";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import type { GroupListLoaderProps } from "../loader/GroupListLoader";
import { VscSearch } from "react-icons/vsc";
import { useState } from "react";
import { GroupType } from "../data-interface/GroupType";

function GroupList() {
  const [term, setTerm] = useState("");

  // const [listGroup,setListGroup]=useState<GroupType[]>([])
  const { allgroups } = useLoaderData() as GroupListLoaderProps;

  const renderData = allgroups.map((data) => {
    if (term !== "") {
      if (data.Name.toLowerCase().includes(term.toLowerCase())) {
        return (
          <Link to={`/detail/${data.Id}`} className="col-span-2" key={data.Id}>
            <GroupListShow group={data} />
          </Link>
        );
      }
    } else {
      return (
        <Link to={`/detail/${data.Id}`} className="col-span-2" key={data.Id}>
          <GroupListShow group={data} />
        </Link>
      );
    }
  });

  return (
    <div className="min-h-[calc(100vh-48px)] bg-customGrey">
      <div className="bg-customGrey py-5 px-10">
        <form>
          <div className="relative flex items-center w-[80%] mx-auto">
            <VscSearch className="absolute inset-x-3 h-5 w-5" />
            <input
              className="p-1 w-full border border-black rounded-md pl-11 outline-none"
              placeholder="Search Name"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className=" bg-customGrey py-2 px-10">
        <div className="font-Mali mt-6 font-bold m-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-10 ">
          {renderData}
        </div>
      </div>
    </div>
  );
}

export default GroupList;
