import "./../styles/Reprogrammation.css";
import { useParams } from "react-router-dom";

function Branddetails()
{

  const {brandname} = useParams();

    	return (<div className="motod">
        <h2>Hello This is {brandname} page</h2>
        </div>);
}

export default Branddetails;
