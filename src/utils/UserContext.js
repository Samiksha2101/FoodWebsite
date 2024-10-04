import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  //   name: "defalutName",
});
export default UserContext;
