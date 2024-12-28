import Dropdown from 'react-bootstrap/Dropdown';

function DropDownToggle() {
  return (
    <Dropdown>
      <Dropdown.Toggle style={{width:'60%', textAlign:'end', background:'white', color:'black'}}>
        1
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownToggle;