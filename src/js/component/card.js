import React from "react";
import { FaRegClock } from "react-icons/fa";
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <> 
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
    </>
  );
};

Cards.defaultProps = {
  digitOne: "0",
  digitTwo: "0",
  digitThree: "0",
  digitFour: "0",
  digitFive: "0",
  digitSix: "0",
};
Cards.PropTypes = {
	digitOne: PropTypes.string,
	digitTwo: PropTypes.string,
	digitThree: PropTypes.string,
	digitFour: PropTypes.string,
  digitFive: PropTypes.string,
  digitSix: PropTypes.string
};

export default Cards;

