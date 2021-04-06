import { useRouter } from "next/router";

import { Container, Image } from "semantic-ui-react";

import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/events/EventSummary";
import EventLogistics from "../../components/events/EventLogistics";
import EventContent from "../../components/events/EventContent";
import EventLabel from "../../components/events/EventLabel";

function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

  if (!event) {
    return <h1>No Event Found!!</h1>;
  }

  return (
    <>
      <Container text className="mt-5">
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          location={event.location}
          image={event.image}
        />
        <EventContent description={event.description} />
        <EventLabel label={event.label} />
      </Container>
    </>
  );
}

export default EventDetailPage;
