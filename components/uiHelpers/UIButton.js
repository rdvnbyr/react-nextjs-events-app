import Link from "next/link"
import { Icon, Button } from "semantic-ui-react";

export function UIButton({
  animated = false,
  onClick,
  withIcon,
  color = 'orange',
  inverted = false,
  floated,
  iconName,
  text,
  link,
  href,
  ...props
}) {
  const uiBtn = (
    <Button
      onClick={onClick}
      animated={animated}
      color={color}
      floated={floated}
      inverted={inverted}
      onClick={onClick}
      {...props}
    >
      {animated && (
        <>
          <Button.Content visible>{text}</Button.Content>
          <Button.Content hidden>
            {" "}
            {withIcon && <Icon name={iconName} />}
          </Button.Content>
        </>
      )}
      {!animated && text}
      {!animated && withIcon && <Icon name={iconName} />}
    </Button>
  );

  return <>{link ? <Link href={href}>{uiBtn}</Link> : uiBtn}</>;
}
