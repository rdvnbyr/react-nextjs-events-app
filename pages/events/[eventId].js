import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import { Container, Divider } from "semantic-ui-react";

import EventSummary from "../../components/events/EventSummary";
import EventLogistics from "../../components/events/EventLogistics";
import EventContent from "../../components/events/EventContent";
import EventLabel from "../../components/events/EventLabel";
import ErrorAlert from "../../components/events/ErrorAlert";

function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <h1>No Event Found!!</h1>
      </ErrorAlert>
    );
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
        <Divider />
        <EventContent description={event.description} />
        <EventLabel label={event.label} />
      </Container>
    </>
  );
}

export default EventDetailPage;
