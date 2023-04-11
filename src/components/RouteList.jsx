import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import metroPng from "../MetroPng.png"

const RouteList = (props) => {

    let path, start, end, interchange, colors, startColor, endColor, colorIdx;

    const init = () => {
        path = props.data.path;
        path = path.map(p => p.toUpperCase());
        start = path[0].toUpperCase();
        end = path.slice(-1)[0].toUpperCase();
        interchange = props.data.interchange;
        interchange = interchange.map(i => i.toUpperCase());
        colors = []
        let i = 1;
        while(props.data["line"+i] != undefined) {
            if(i === 1) {
                colors.push(props.data["line"+i][0].toUpperCase());
            }
            colors.push(props.data["line"+i][1].toUpperCase());
            i++;
        }
        startColor = colors[0];
        endColor = colors.slice(-1)[0];
        console.log(colors);
        colorIdx = 0;
    }

    const printName = (name, idx) => {
        if(name === interchange[colorIdx]) {
            colorIdx++;
        }
        return <p className = "station-name" id = {idx} style = {{color: colors[colorIdx]}}>{name}</p>;
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
                return printName(station);
            })}
        </div>
    </>
}


export default RouteList;