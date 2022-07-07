import { SvgIcon } from "@mui/material";
import React from "react";

const UserProfile = (props) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <title>user_outlined</title>
      <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6Zm7.89,12.55L18,14.66A3,3,0,0,0,15.26,13H8.74a3,3,0,0,0-2.69,1.66L4.11,18.55A1,1,0,0,0,5,20H19A1,1,0,0,0,19.89,18.55ZM6.62,18l1.22-2.45a1,1,0,0,1,.9-.55h6.52a1,1,0,0,1,.9.55L17.38,18Z" />
    </SvgIcon>
  );
};

export default UserProfile;
