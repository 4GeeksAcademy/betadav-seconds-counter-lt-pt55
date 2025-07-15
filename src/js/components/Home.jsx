import React from "react";
import Secondscounter from "./Secondscounter";

const Home = (props) => {
    return (
        <Secondscounter seconds={props.seconds} />
    );
};

export default Home;