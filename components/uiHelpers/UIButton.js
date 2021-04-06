import { Icon, Button } from "semantic-ui-react";

export function UIButton({
  animated = false,
  onClick,
  withIcon,
  color = "orange",
  inverted = false,
  floated = "right",
  iconName,
  text,
}) {
  return (
    <Button
      onClick={onClick}
      animated={animated}
      color={color}
      floated={floated}
      inverted={inverted}
      onClick={onClick}
    >
      {animated && (
        <>
          <Button.Content visible>{text}</Button.Content>
          <Button.Content hidden>
            {" "}
            <Icon name={iconName} />
          </Button.Content>
        </>
      )}
      {!animated && text}
      {withIcon && <Icon name={iconName} />}
    </Button>
  );
}
