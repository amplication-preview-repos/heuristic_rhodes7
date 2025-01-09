import { StringFilter } from "../../util/StringFilter";
import { User2WhereUniqueInput } from "../user2/User2WhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  user2s?: User2WhereUniqueInput;
};
