import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

export default function Comments({ ticketId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/api/tickets/${ticketId}/comments`
      );

      setComments(response.data.comments);
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the server");
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const commentsJSX = comments.map(({ id, comment }) => (
    <ListGroup.Item key={id}>{comment}</ListGroup.Item>
  ));

  return <ListGroup>{commentsJSX}</ListGroup>;
}
