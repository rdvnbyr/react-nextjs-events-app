import { useEffect, useState } from "react";
import useSWR from "swr";

import { Card, CardGroup } from "react-bootstrap";
import { LoadingScreen } from "../../components/uiHelpers";

function Firebase(props) {
  const [events, setEvents] = useState(props.events);
  const { data, error } = useSWR(
    "https://next-events-app-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      const fetchedEvents = [];
      for (const key in data) {
        const event = {
          ...data[key],
          _id: key,
        };
        fetchedEvents.push(event);
      }
      setEvents(fetchedEvents);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="mt-5 row justify-content-center">
        <LoadingScreen />
      </div>
    );

  return (
    <div className="row justify-content-center">
      <CardGroup className="p-5 mt-5 mx-auto">
        {events.map((event) => (
          <Card
            key={event._id}
            style={{ minWidth: "24rem", maxWidth: "24rem" }}
          >
            <Card.Img
              variant="top"
              src={`/${event.image}`}
              style={{ height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text className="text-muted">{event.date}</Card.Text>
              <Card.Text className="text-muted">{event.location}</Card.Text>
              <Card.Text>{event.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {event.label.map((label, index) => (
                <small key={index} className="mr-3">
                  {label}
                </small>
              ))}
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://next-events-app-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const fetchedEvents = [];
  for (const key in data) {
    const event = {
      ...data[key],
      _id: key,
    };
    fetchedEvents.push(event);
  }

  return {
    props: {
      events: fetchedEvents,
    },
  };
}

export default Firebase;
