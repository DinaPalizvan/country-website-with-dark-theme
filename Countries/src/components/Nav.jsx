import {Moon, MoonFill} from "react-bootstrap-icons"
import {useSelector, useDispatch} from "react-redux"
import { changeTheme } from "../redux/filterSlice"


export default function Nav(){

    const dark= useSelector(state=>state.filteredCountries.isDark)
    const dispatch= useDispatch()

    const handleChangeTheme=()=>{
        dispatch(changeTheme())
    }

    return <>
    <nav style={{backgroundColor: dark? "hsl(209, 23%, 22%)":"white", color: dark ? "white": "hsl(200, 15%, 8%)" }}>
        <h4>Where in the world?</h4>
        <span>
            <Moon style={{display: !dark? "inline": "none", cursor:"pointer"}} onClick={handleChangeTheme} />
            <MoonFill style={{display: dark? "inline": "none", color: "white", cursor:"pointer"}} onClick={handleChangeTheme} />
            Dark Mode
        </span>

    </nav>
    </>
}