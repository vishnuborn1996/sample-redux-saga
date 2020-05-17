import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./app.css";
import ColorPanel from "./colorPanel/ColorPanel";
import SidePanel from "./sidePanel/SidePanel";
import Messages from "./messages/Messages";
import MetaPanel from "./metaPanel/MetaPanel";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.user,
  };
};

const App = (props) => {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <ColorPanel />
      <SidePanel currentUser={props.currentUser} />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};
export default connect(mapStateToProps)(App);
