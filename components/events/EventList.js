import { EventItem } from "./EventItem";
import { Item } from "semantic-ui-react";

function EventList({ events }) {
  return (
    <Item.Group divided>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Item.Group>
  );
}

export default EventList;
