import { Spinner } from "react-bootstrap";

export const LoadingScreen = () => (
  <div className="row">
    <h2 className="mr-3 text-dark">Loading...</h2>
    <Spinner animation='border' variant="primary" />
  </div>
);
