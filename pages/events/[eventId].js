import { Container, Divider } from "semantic-ui-react";

import EventSummary from "../../components/events/EventSummary";
import EventLogistics from "../../components/events/EventLogistics";
import EventContent from "../../components/events/EventContent";
import EventLabel from "../../components/events/EventLabel";
import { LoadingScreen } from "../../components/uiHelpers";
import { useFetch } from "../../hooks/fetch-hook";

function EventDetailPage(props) {
  const { event } = props;

  // if fallback is blocking , we need that loading effect
  if (!event) {
    return (
      <div className="mt-5 row justify-content-center">
        <LoadingScreen />
      </div>
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

export async function getServerSideProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const { data } = await useFetch();
  const event = data.find((e) => e._id === eventId);

  return {
    props: {
      event,
    },
  };
}

export default EventDetailPage;
