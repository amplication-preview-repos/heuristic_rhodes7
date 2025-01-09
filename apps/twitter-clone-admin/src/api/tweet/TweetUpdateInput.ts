import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  user?: UserWhereUniqueInput | null;
};
