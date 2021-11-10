import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/Login");
  }

  return (
    <>
      <h4 className="text">WELCOME</h4>
      <Button variant="primary" size="lg" onClick={handleClick}>
        Login
      </Button>

    </>
  );
}
export default Home;

