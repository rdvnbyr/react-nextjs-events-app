import { List, Image } from "semantic-ui-react";

function EventLogistics({ date, location, image }) {
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  return (
    <>
      <Image src={`/${image}`} size="massive" centered />
      <List>
        <List.Item>
          <List.Icon disabled color="orange" name="calendar outline" />
          <List.Content>{formatDate}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon disabled color="orange" name="marker" />
          <List.Content>{formattedAddress}</List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default EventLogistics;
