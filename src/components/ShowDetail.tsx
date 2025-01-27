import { useLoaderData } from "react-router-dom";
import { DetailLoaderProps } from "../loader/DetailLoader";

function ShowDetail() {
  //GroupListShow ข้างหน้าส่ง data มาให้ ไม่ใช้ id แล้ว
  const { groupdetail } = useLoaderData() as DetailLoaderProps;

  if (groupdetail[0].FandomName == "") {
    groupdetail[0].FandomName = "-";
  }
  return (
    <div className="bg-customGrey w-screen min-h-[calc(100vh-48px)] flex justify-center items-center px-20 py-10">
      <div
        className="grid grid-cols-2
      sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
      bg-white h-fit gap-3 p-10 rounded-2xl overflow-hidden shadow-xl
      max-w-[1000px]"
      >
        <div className="col-span-2 rounded-md  overflow-hidden">
          <img src={groupdetail[0].Image} alt="grouplist" className="" />
        </div>
        <div className="p-4 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
          <p
            className=" h-fit w-[100%] text-center font-bold font-Mali underline
        text-lg"
          >
            {groupdetail[0].Name}
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-3 font-Mali font-semibold text-md mt-3 w-fit">
              <p>
                Debut : {groupdetail[0].Debut}
              </p>
              <p>Label : {groupdetail[0].Company}</p>
              <p>Orginal Members : {groupdetail[0].OriginalMember} Members</p>
              <p>Current Member: {groupdetail[0].CurrentMemberCount} members</p>
              <p>Fandom : {groupdetail[0].FandomName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;
