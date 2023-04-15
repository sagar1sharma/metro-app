import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import metroPng from "../MetroPng.png";

const RouteList = (props) => {

    let path, start, end, interchange, colors, startColor, endColor, colorIdx;

    const init = () => {
        path = props.data.path;
        path = path.map(p => p.toUpperCase());
        start = path[0].toUpperCase();
        end = path.slice(-1)[0].toUpperCase();
        interchange = props.data.interchange;
        if (interchange.length != 0) {
            interchange = interchange.map(i => i.toUpperCase());
        }
        colors = []
        colors.push(props.data["line"+1][0].toUpperCase());
        let i = 0;
        while(props.data["line"+2].length > i) {
            colors.push(props.data["line"+2][i].toUpperCase())
            i++;
        }
        
        startColor = colors[0];
        endColor = colors.slice(-1)[0];
        colorIdx = 0;
    }

    const printName = (name, idx) => {
        if(name === interchange[colorIdx]) {
            colorIdx++;
        }
        return <p className = "station-name" key = {idx} style = {{color: colors[colorIdx]}}>{name}</p>;
    }

    init();

    return <>
        <div className= "route-card">
            <div className = "route-heading">
                <div className = "route-src">
                    <h4>{start}</h4>
                    <p style={{color: startColor, fontSize: "small"}}>
                        <img className = "small-logo" src = {metroPng} />{startColor} Line
                    </p>
                </div>
                <div className= "arrow">
                    <BsFillArrowRightSquareFill />
                </div>
                <div className = "route-src">
                    <h4>{end}</h4>
                    
                    <p style={{color: endColor, fontSize: "small"}}>
                        <img className = "small-logo" src = {metroPng} />{endColor} Line
                    </p>
                </div>
            </div>
            <hr />
            {path.map((station, idx) => {
                return printName(station, idx);
            })}
            <hr />
            <p>Total Fare: ₹ XX</p>
        </div>
    </>
}


export default RouteList;