import { Search } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import {useSelector, useDispatch} from "react-redux"
import { addSearchData, filterByRegion } from "../redux/filterSlice";

export default function Header() {
  const searchData= useSelector(state=>state.filteredCountries.searchData)
  const dispatch= useDispatch()

  const handleSearch=(e)=>{
    dispatch(addSearchData(e.target.value))
  }
  // const handleSelection=(e)=>{
  //   console.log(e.target.value);
  //   dispatch(filterByRegion(e.target.value))
  // }

  return (
    <>
      <div className="headerContainer">
        <div style={{position:"relative"}} >
        <Search style={{position:"absolute", top:"35%", left:30}} />
        <input type="text" placeholder="Search for a country" style={{padding: "15px 50px", border:0, boxShadow: "0 0 10px 0 lightGray", borderRadius:5}} onChange={handleSearch}/>

        </div>
      <Form.Select aria-label="Default select example" className="select">
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Form.Select>
      </div>
    </>
  );
}
