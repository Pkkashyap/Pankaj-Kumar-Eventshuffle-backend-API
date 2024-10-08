import { Document } from "mongoose";
export default interface IUser extends Document {
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
