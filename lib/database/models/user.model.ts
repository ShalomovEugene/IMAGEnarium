import { Document, Schema, models, model } from "mongoose";

const UserShema = new Schema({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  photo: { type: String, require: true },
  firstName: { type: String },
  lastName: { type: String },
  palanId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserShema);

export default User;
