import React, { useState, useEffect } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import { clearUser } from "../../actions/userActions";
import { connect } from "react-redux";
import firebase from "../../library/firebase";

const UserPanel = (props) => {
  const [user] = useState({
    ...props.currentUser,
  });

  useEffect(() => {}, [user]);

  const dropdownOptions = () => [
    {
      text: (
        <span>
          Signed in as <strong>{user.displayName}</strong>
        </span>
      ),
      disable: "true",
      key: 1,
    },
    {
      text: <span>Change avatar</span>,
      disable: "true",
      key: 2,
    },
    {
      text: <span onClick={handleLogout}>Sign Out</span>,
      disable: "true",
      key: 3,
    },
  ];

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.clearUser();
      });
  };
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
          <Header inverted floated="left" as="h3">
            <Icon name="code" />
            <Header.Content>Dev Chat</Header.Content>
          </Header>
        </Grid.Row>
        <Header style={{ padding: "1.2em" }} as="h4" inverted>
          <Dropdown
            trigger={<span>{user.displayName}</span>}
            options={dropdownOptions()}
          ></Dropdown>
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default connect(null, { clearUser })(UserPanel);
