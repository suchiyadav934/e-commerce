import React, { useState } from "react";
import userContext1 from "./UserContext1";

const UserState1 = (Props) => {
  const [search, setsearch] = useState("");
  let details = JSON.parse(localStorage.getItem("UserDetails"));
  const [userData, setuserData] = useState({
    login: details ? details.login : false,
    email: details ? details.email : "",
  });
  console.log(userData);
  return (
    <userContext1.Provider value={{ userData, setuserData, search , setsearch}}>
      {Props.children}
    </userContext1.Provider>
  );
};

export default UserState1;
 