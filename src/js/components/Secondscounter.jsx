import React from "react";

const Secondscounter = (props) => {
    const six = Math.floor(props.seconds / 100000) % 10;
    const five = Math.floor(props.seconds / 10000) % 10;
    const four = Math.floor(props.seconds / 1000) % 10;
    const three = Math.floor(props.seconds / 100) % 10;
    const two = Math.floor(props.seconds / 10) % 10;
    const one = Math.floor(props.seconds / 1) % 10;

    return (
        <div className="d-flex justify-content-center bg-dark text-white p-4 fs-1">
            <div className="me-2 p-2 bg-secondary rounded m-2">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="p-2 bg-secondary rounded m-2">{six}</div>
            <div className="p-2 bg-secondary rounded m-2">{five}</div>
            <div className="p-2 bg-secondary rounded m-2">{four}</div>
            <div className="p-2 bg-secondary rounded m-2">{three}</div>
            <div className="p-2 bg-secondary rounded m-2">{two}</div>
            <div className="p-2 bg-secondary rounded m-2">{one}</div>
        </div>
    );
};

export default Secondscounter;

