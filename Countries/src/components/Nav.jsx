import {Moon, MoonFill} from "react-bootstrap-icons"
import {useSelector, useDispatch} from "react-redux"
import { changeTheme } from "../redux/filterSlice"


export default function Nav(){

    const dark= useSelector(state=>state.filteredCountries.isDark)
    const dispatch= useDispatch()

    const handleChangeTheme=()=>{
        dispatch(changeTheme())
        console.log(dark);
    }

    return <>
    <nav >
        <h4>Where in the world?</h4>
        <span>
            <Moon style={{display: !dark? "inline": "none"}} onClick={handleChangeTheme} />
            <MoonFill style={{display: dark? "inline": "none", color: "white"}} onClick={handleChangeTheme} />
            Dark Mode
        </span>

    </nav>
    </>
}