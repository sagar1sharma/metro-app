import { useNavigate } from "react-router-dom";

const ErrorMsg = props => {

    const Navigate = useNavigate();

    const showErr = status => {
        let msg = ""
        switch(status) {
            case 204:
                msg = "Same source and destination";
                break;
            case 400:
                msg = "Undefined source or destination";
                break;
            case 4061:
                msg = "Invalid source";
                break;
            case 4062:
                msg = "Invalid destination";
                break;
            case 406:
                msg = "Invalid destination";
                break;
        }
        return msg;
    }

    function handleClick(){
        Navigate("/");
    }

    return <>
        <div className= "route-card route-heading">
            <h1>Error!  </h1>
            <h3> {showErr(props.statusCode)}</h3><br></br>
            <button id="takemeback" onClick={handleClick}>Take Me Back!</button>
        </div>
    </>
}

export default ErrorMsg;