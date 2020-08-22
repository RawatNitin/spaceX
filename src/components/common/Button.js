import React from "react";
import "./Button.css";

const Button = (props) => {
    const { isSelected, name, onClick } = props;
    return (
        <div className={`launch-btn ${isSelected ? "selected" : ""}`} onClick={onClick}>
            {name}
        </div>
    )
}

export default React.memo(Button);