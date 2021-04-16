function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="title">
      <h1>Events in <b>{humanReadableDate}</b></h1>
    </section>
  );
}

export default ResultsTitle;
