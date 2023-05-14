import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <Subtitle>{"SimpleComponent"}</Subtitle>
            {isAuth === false ? (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
