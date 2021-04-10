import { UIButton } from "../uiHelpers";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="title">
      <h1>Events in {humanReadableDate}</h1>
      <UIButton link href="/events" text="Show all events" color="blue" />
    </section>
  );
}

export default ResultsTitle;
