import React, { useState, useEffect } from "react";
import axios from "axios";

import Ticket from "./TicketNoAPI";

export default function ListTicket() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4002/api/tickets-with-comments"
      );

      const ticketsObj = response.data.tickets;

      const ticketsArr = [];

      for (const ticketId in ticketsObj) {
        ticketsArr.push(ticketsObj[ticketId]);
      }

      setTickets(ticketsArr);
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the server");
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return tickets.map(({ id, name, subject, description, comments }) => (
    <Ticket
      key={id}
      ticketId={id}
      ticketName={name}
      ticketSubject={subject}
      ticketDescription={description}
      ticketComments={comments}
    />
  ));
}
