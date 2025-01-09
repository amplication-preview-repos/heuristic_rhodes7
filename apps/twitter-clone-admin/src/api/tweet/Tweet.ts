import { User } from "../user/User";

export type Tweet = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
