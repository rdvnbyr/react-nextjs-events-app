import { useState } from "react";
import EventList from "../components/events/EventList";
import { LoadingScreen } from "../components/uiHelpers";
import { useFetch } from "../hooks/fetch-hook";

function Home(props) {
  if (!props.events)
    return (
      <div className="mt-5 row justify-content-center">
        <LoadingScreen />
      </div>
    );
  return (
    <div>
      <main>
        <div className="row justify-content-center mt-5 px-5">
          <EventList events={props.events} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await useFetch();
  const events = data.filter((e) => e.isFeatured === true);

  return {
    props: {
      events: events,
    },
    revalidate: 10, // only the production works (10s re-rendering)
  };
}

export default Home;
