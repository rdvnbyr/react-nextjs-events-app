import { LoadingScreen } from "../../components/uiHelpers";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import { UIButton, ErrorAlert } from "../../components/uiHelpers";
import { useFetch } from "../../hooks/fetch-hook";

function FilteredEvent(props) {
  const { year, month, data } = props;

  if (!data) {
    return (
      <div className="mt-5 row justify-content-center">
        <LoadingScreen />
      </div>
    );
  }

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

  return (
    <div>
      {data.length === 0 ? (
        <div className="mt-5 text-center">
          <ErrorAlert>
            <h2>No Events Found!</h2>
          </ErrorAlert>
          <UIButton link href="/events" text="Show all events" color="blue" />
        </div>
      ) : (
        <div className="row justify-content-center mt-5 px-5">
          <ResultsTitle date={new Date(year, month - 1)} />
          <EventList events={data} />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;
  const year = +slug[0];
  const month = +slug[1];

  const { data } = await useFetch();
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return {
    props: {
      year,
      month,
      data: filteredEvents,
    },
  };
}

export default FilteredEvent;
