import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <main>
        <div className="row justify-content-center mt-5 px-5">
          <EventList events={featuredEvents} />
        </div>
      </main>
    </div>
  );
}

export default Home;
