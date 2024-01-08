import { models } from "mongoose";

const userSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
