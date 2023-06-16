import Dashboard from "../Components/Dashboard";
import LeftComponent from "../Components/LeftComponent"
import RightComponent from "../Components/RightComponent";
import '../Styles/PageStyle.css'
import NavBar from "../Components/NavBar";
import DashboardAcompanante from "../Components/DashboardAcompanante";

function Acompañante(){

    return(
        <div className = 'bg'>
                <NavBar></NavBar>
                <DashboardAcompanante></DashboardAcompanante>
                
                
                
        </div>
    )


}

export default Acompañante;