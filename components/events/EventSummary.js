import { Header, Icon } from "semantic-ui-react";

function EventSummary({ title }) {
  return (
    <Header color="orange" as="h1">
      <Icon name="react" />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
}

export default EventSummary;
