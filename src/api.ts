import axios from "axios";
import type { GroupType } from "./data-interface/GroupType";

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
  KoreanName: string;
  Name: string;
  OriginalMemberCount: number;
  ShortName: string;
  Image:string
}

export default async function api() {
  const res: jsonData = await axios.get("../all_groups.json");



  const data: GroupType[] = res.data.map((value) => {
    return{
        Company:value.Company,
        CurrentMemberCount:value.CurrentMemberCount,
        Debut:value.Debut,
        FandomName:value.FanbaseName,
        Id:value.Id,
        Name:value.Name,
        OriginalMember:value.OriginalMemberCount,
        Image:value.Image
    }
  });

  return data
}
