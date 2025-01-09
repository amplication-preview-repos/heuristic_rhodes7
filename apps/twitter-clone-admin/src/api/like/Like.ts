import { User2 } from "../user2/User2";

export type Like = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user2s?: User2 | null;
};
