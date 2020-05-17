import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Segment,
  Form,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";

const LoginGrid = (props) => {
  const { loginData, handleChange, handleSubmit, errors, loading } = props;

  const { email, password } = loginData;
  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="blue" textAlign="center">
          <Icon name="sign in" color="blue" />
          Login
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleChange}
              error={errors.email ? errors.email : false}
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleChange}
              error={errors.password ? errors.password : false}
            />
            <Button
              disabled={loading}
              className={loading ? "loading" : ""}
              color="blue"
              fluid
              size="large"
            >
              Login
            </Button>
          </Segment>
        </Form>
        {errors.generic && <Message error>{errors.generic}</Message>}
        <Message>
          Not a user ?<Link to="/register"> Register</Link>{" "}
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginGrid;
