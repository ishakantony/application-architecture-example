import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Comments({ comments }) {
  const commentsJSX = comments.map(({ id, comment }) => (
    <ListGroup.Item key={id}>{comment}</ListGroup.Item>
  ));

  return <ListGroup>{commentsJSX}</ListGroup>;
}
