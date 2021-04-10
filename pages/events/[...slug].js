import { useRouter } from "next/router";
import { LoadingScreen } from "../../components/uiHelpers";
import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/events/ErrorAlert";
import { UIButton } from "../../components/uiHelpers";

function FilteredEvent() {
  const { slug } = useRouter().query;
  if (!slug) {
    return (
      <div className="text-center">
        <LoadingScreen />
      </div>
    );
  }
  const year = +slug[0];
  const month = +slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <h2>Invalid filter events. Please adjust your values!</h2>
          <UIButton
            link
            href="/events"
            text="Show all events"
            inverted
            color="red"
          />
        </ErrorAlert>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);

  return (
    <div>
      {!filteredEvents || filteredEvents.length === 0 ? (
        <div className="mt-5 text-center">
          <ErrorAlert>
            <h2>No Events Found!</h2>
          </ErrorAlert>
          <UIButton link href="/events" text="Show all events" color="blue" />
        </div>
      ) : (
        <div className="row justify-content-center mt-5 px-5">
          <ResultsTitle date={date} />
          <EventList events={filteredEvents} />
        </div>
      )}
    </div>
  );
}

export default FilteredEvent;
