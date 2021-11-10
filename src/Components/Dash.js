import { useHistory } from "react-router-dom";

function Dash() {
  let history = useHistory();

  function handleClick() {
    history.push("/Login");
  }

  return (
      <>
      <h4>wlcm back</h4>
      <button type="button" onClick={handleClick}>Back</button>
    
    </>
  );
}
export default Dash;

