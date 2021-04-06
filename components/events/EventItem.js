import Link from "next/link";
import { Item, Icon, Label } from "semantic-ui-react";
import { UIButton } from "../uiHelpers";

export function EventItem({ event }) {
  const { title, image, date, location, description, id, label } = event;
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  return (
    <Item className="my-4">
      <Item.Image src={`/${image}`} alt={title} />
      <Item.Content>
        <Item.Header as="h1">{title}</Item.Header>
        <Item.Meta>
          <Icon name="calendar outline" color="orange" />
          <span className="date">{formatDate}</span>
        </Item.Meta>
        <Item.Meta>
          <Icon name="marker" color="orange" />
          <span className="date">{formattedAddress}</span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Link href={`/events/${id}`}>
            <UIButton
              inverted={true}
              text="Explore Event"
              withIcon={true}
              iconName="right chevron"
            />
          </Link>
          {label.map((label, index) => (
            <Label key={index}>{label}</Label>
          ))}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
