import axios from "axios";
import { Params } from "react-router-dom";
import type { GroupType } from "../data-interface/GroupType";
import api from "../api/api";

export interface DetailLoaderProps {
  groupdetail: GroupType[];
}

async function DetailLoader({params,}: {params: Params;}) {//Loader จะไม่ fetch ข้อมูลแต่จะทำการเรียก function ฟยร
  const { id } = params;
  const res:GroupType[] = await api()


  const resfilter = res.filter((data) => {
    return id == `${data.Id}`;
  });

  const groupdetail: GroupType[] = resfilter.map((data) => {
    return {
      Company: data.Company,
      CurrentMemberCount: data.CurrentMemberCount,
      Debut: data.Debut,
      FandomName: data.FandomName,
      Id: data.Id,
      Name: data.Name,
      OriginalMember: data.OriginalMember,
      Image: data.Image,
    };
  });

  return { groupdetail };
}

export default DetailLoader;
