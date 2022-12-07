//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { FaRegClock } from "react-icons/fa";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props) {
    return (
        <div>
            <div className="container-fluid pb-4 justify-content-center bg-dark justify-items-center m-auto">
               <div className="d-flex m-auto justify-content-around">
                <div className=" bg-dark bg-gradient text-white py-3 px-3 m-1 my-4 border border-secondary rounded fs-1">
                    <FaRegClock />
                </div>
                <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1 my-4 border border-secondary rounded fs-1">
                    {props.digitOne}
                </div>
                <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1 my-4 border border-secondary rounded fs-1">
                    {props.digitTwo}
                </div>
                <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1 my-4 border border-secondary rounded fs-1">
                    {props.digitThree}
                </div>
                <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1 my-4 border border-secondary rounded fs-1">
                    {props.digitFour}
                </div>
                <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1 my-4 border border-secondary rounded fs-1">
                    {props.digitFive}
                </div>
                <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1 my-4 border border-secondary rounded fs-1">
                    {props.digitSix}
                </div>
            </div>
            <div className=" bg-dark bg-gradient text-white py-3 px-4 m-1  border border-secondary rounded fs-1 row align-items-start">
                <button className="btn btn-dark bg-gradient col m-2" onClick={Stop}>stop</button>
            </div>

            </div>
        </div>
    );
};

SimpleCounter.defaultProps = {
    digitOne: "0",
    digitTwo: "0",
    digitThree: "0",
    digitFour: "0",
    digitFive: "0",
    digitSix: "0",
}
SimpleCounter.propTypes = {
    digitOne: propTypes.string,
    digitTwo: propTypes.string,
    digitThree: propTypes.string,
    digitFour: propTypes.string,
    digitFive: propTypes.string,
    digitSix: propTypes.string,
}

let contador = 0;
const myInterval = setInterval(function () {
    contador++;
    let hola = contador.toString();
    let six = hola.at(-1);
    const five = hola.at(-2);
    const four = hola.at(-3);
    const three = hola.at(-4);
    const two = hola.at(-5);
    const one = hola.at(-6);

/*     console.log("checkeando contador:", hola, typeof hola);
    console.log("segundos:", six, typeof six);
 */
    ReactDOM.render(<SimpleCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
        digitSix={six}
       // onClick={myAlarm()}
    />, document.querySelector("#app"));
}, 1000);
// console.log(contador, "contador");
const Stop= ()=>{
    clearInterval(myInterval)
}

