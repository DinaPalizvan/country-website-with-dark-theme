import { Search } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

export default function Header() {
  return (
    <>
      <div>
        <Search />
        <input type="text" placeholder="Search for a country" />
      </div>
      <Form.Select aria-label="Default select example">
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Form.Select>
    </>
  );
}
