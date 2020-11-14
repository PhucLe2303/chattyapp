import { CircularProgress } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

Loading.propType = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: "40px",
  color: "primary",
};

function Loading(props) {
  const { size, color, ...other } = props;
  return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}}>
             <CircularProgress size={size} color={color} {...other} style={{color:"#1C9DEA"}}/>
        </div>
  )
}

export default Loading;
