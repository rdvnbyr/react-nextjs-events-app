import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { LoadingScreen } from "../../components/uiHelpers";
import { useFetch } from "../../hooks/fetch-hook";

function EventsPage(props) {
  const [events, setEvents] = useState(props.events);
  const router = useRouter();

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
  if (!data) {
    return (
      <div className="mt-5 row justify-content-center">
        <LoadingScreen />
      </div>
    );
  }
  const findEventsHandler = ({ year, month }) => {
    const pathname = `/events/${year}/${month}`;
    router.push(pathname);
  };

  return (
    <>
      <div className="my-5 pl-5">
        <EventsSearch onSearch={findEventsHandler} />
      </div>
      <div className="row justify-content-center mt-5 px-5">
        <EventList events={events} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await useFetch();
  return {
    props: {
      events: data,
    },
  };
}

export default EventsPage;
