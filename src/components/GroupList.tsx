import GroupListShow from "./GroupListShow";
import api from "../api";
import { useEffect, useState } from "react";
import type { GroupType } from "../data-interface/GroupType";
import { Link } from "react-router-dom";

function GroupList() {
  const [data, setData] = useState<GroupType[]>([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const result = await api();
    setData(result);
  };

  const renderData = data.map((data) => {
    return (
      <Link to={`/detail/${data.Name}`}
      className="col-span-2">
        <GroupListShow key={data.Id} group={data} /> 
      </Link>
    );
  });

  return (
    <div className=" bg-customGrey py-2 px-10">
      <h1 className="font-Mali text-xl font-bold mt-5 ml-4">Kpop Group :</h1>
      <div className="font-Mali mt-6 font-bold m-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-10 ">
        {renderData}
      </div>
    </div>
  );
}

export default GroupList;
