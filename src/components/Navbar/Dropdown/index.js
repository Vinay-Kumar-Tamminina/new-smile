import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
function DropDown() {
  return (
    <DropdownButton  title="Log In" className="dropdown">
      <Dropdown.Item href="/farmer-login">Farmer LogIn</Dropdown.Item>
      <Dropdown.Item href="/dealer-login">Dealer LogIn</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;