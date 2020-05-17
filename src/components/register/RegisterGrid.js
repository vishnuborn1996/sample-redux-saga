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

const RegisterGrid = (props) => {
  const {
    registrationData,
    handleChange,
    handleSubmit,
    errors,
    loading,
  } = props;

  const { username, email, password, confirmPassword } = registrationData;
  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="blue" textAlign="center">
          <Icon name="dolly" color="blue" />
          Register
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              value={username}
              onChange={handleChange}
              error={errors.username ? errors.username : false}
            />
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
            <Form.Input
              fluid
              name="confirmPassword"
              icon="repeat"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword ? errors.confirmPassword : false}
            />
            <Button
              disabled={loading}
              className={loading ? "loading" : ""}
              color="blue"
              fluid
              size="large"
            >
              Submit
            </Button>
          </Segment>
        </Form>
        {errors.generic && <Message error>{errors.generic}</Message>}
        <Message>
          Already a user ?<Link to="/login"> Login</Link>{" "}
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default RegisterGrid;
