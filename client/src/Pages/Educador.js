import Dashboard from "../Components/Dashboard";
import LeftComponent from "../Components/LeftComponent"
import RightComponent from "../Components/RightComponent";
import '../Styles/PageStyle.css'
import NavBar from "../Components/NavBar";
import DashboardAcompanante from "../Components/DashboardAcompanante";
import DashboardEducador from "../Components/DashboardEducador";

function Acompañante(){

    return(
        <div className="bg">
        <div className = 'bg2'>
                <NavBar></NavBar>
                <DashboardEducador></DashboardEducador>
                
                
                
        </div>
        </div>
    )


}

export default Acompañante;