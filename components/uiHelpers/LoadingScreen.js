import { Spinner } from "react-bootstrap";

export const LoadingScreen = () => (
  <div className="row">
    <h2 className="mr-3 text-primary">Loading...</h2>
    <Spinner animation="grow" variant="primary" />
  </div>
);
