import { useRouter} from "next/router"
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch"
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const router = useRouter();

  const allEvents = getAllEvents();
  const findEventsHandler = ({year, month}) => {
    //console.log({year,month})
    const pathname = `/events/${year}/${month}`;
    router.push(pathname);
  }
  return (
    <div>
      <h1>All Events</h1>
      <div className="mt-5 pl-5">
        <EventsSearch onSearch={findEventsHandler}/>
      </div>
      <div className="row justify-content-center mt-5 px-5">
        <EventList events={allEvents} />
      </div>
    </div>
  );
}

export default EventsPage;
