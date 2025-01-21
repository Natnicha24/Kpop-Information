import type { GroupType } from "../data-interface/GroupType"

function GroupListShow({ group }: { group: GroupType }) { 
  return (
    <div className="bg-white rounded-lg overflow-hidden col-span-2 min-w-10
     hover:drop-shadow-lg 
     hover:scale-105 transition-transform duration-300
     hover:cursor-pointer" >
      <div id={`${group.Id}`} className="bg-red-300 w-full h-36 flex justify-center items-center">
        <img src={group.Image} alt="nonpic" className="h-full w-full object-cover" />
      </div>
      <div className="text-center m-2">
      <h2>{group.Name}</h2>
      </div>
    </div>
  );
}

export default GroupListShow;
