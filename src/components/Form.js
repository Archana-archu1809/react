import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { connect } from "react-redux";

import { addUser } from "../Actions/action";
function AddUser(props) {
  const [name, setName] = useState([]);
  const [userName, setUserName] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const data = { name: name, username: userName };
    props.addPost(data);
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group>
        <Form.Label>name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>userName</Form.Label>
        <Form.Control
          name="username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit">AddUser</Button>
    </Form>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => {
      dispatch(addUser(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
