import type { GroupType } from "../data-interface/GroupType";
import api from "../api/api";

export interface GroupListLoaderProps {
  allgroups: GroupType[];
}

export async function GroupListLoader(): Promise<GroupListLoaderProps> {
  const result = await api();

  return {
    allgroups: result,
  };
}
