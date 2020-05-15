import React from "react";

import Ticket from "./Ticket";

export default function ListTicket() {
  const tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return tickets.map((ticket) => <Ticket key={ticket} />);
}
