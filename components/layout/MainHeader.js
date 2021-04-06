import Link from "next/link";
import { Menu } from "semantic-ui-react";

function MainHeader() {
  return (
    <header>
      <Menu stackable size="massive">
        <Link href="/">
          <Menu.Item>
            <img src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
        </Link>
        <Link href="/events">
          <Menu.Item name="features">All Events</Menu.Item>
        </Link>
      </Menu>
    </header>
  );
}

export default MainHeader;
