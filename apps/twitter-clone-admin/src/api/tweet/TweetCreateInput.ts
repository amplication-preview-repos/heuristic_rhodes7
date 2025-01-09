import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  user?: UserWhereUniqueInput | null;
};
