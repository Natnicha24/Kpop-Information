import axios from "axios";
import { Params } from "react-router-dom";
import type { GroupType } from "../data-interface/GroupType";
interface jsonData {
  data: Data[];
}

interface Data {
  Active: string;
  Company: string;
  CurrentMemberCount: number;
  Debut: string;
  FanbaseName: string;
  Id: number;
  Image: string;
  KoreanName: string;
  Name: string;
  OriginalMemberCount: number;
  ShortName: string;
}

export interface DetailLoaderProps {
  groupdetail: GroupType[];
}

async function DetailLoader({ params }: { params: Params }):Promise<DetailLoaderProps> {
  const { id } = params;

  const res: jsonData = await axios.get("./all_groups.json");
  const resfilter = res.data.filter((data) => {
    return id == `${data.Id}`;
  });

  const groupdetail: GroupType[] = resfilter.map((data) => {
    return {
      Company: data.Company,
      CurrentMemberCount: data.CurrentMemberCount,
      Debut: data.Debut,
      FandomName: data.FanbaseName,
      Id: data.Id,
      Name: data.Name,
      OriginalMember: data.OriginalMemberCount,
      Image: data.Image,
    };
  });

  return { groupdetail };
}

export default DetailLoader;
