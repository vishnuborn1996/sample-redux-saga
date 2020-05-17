import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";

const SidePanel = () => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: "#3f0e40" }}
    >
      <UserPanel />
    </Menu>
  );
};

export default SidePanel;
