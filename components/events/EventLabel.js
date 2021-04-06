import { Label, Button, Icon } from "semantic-ui-react";
import { UIButton } from "../uiHelpers";

function EventLabel({ label }) {
  return (
    <div className="my-3 py-5 row justify-content-between">
      <div>
        {label.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
      </div>
      <UIButton
        animated={true}
        onClick={() => alert("Buy a ticket !!")}
        text="Buy a Ticket"
        iconName="shop"
      />
    </div>
  );
}
export default EventLabel;
