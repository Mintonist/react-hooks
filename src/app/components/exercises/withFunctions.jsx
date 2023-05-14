import React from "react";
import CardWrapper from "../common/Card";

const withFunstions = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth").indexOf("token") !== -1;
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.setItem("auth", "");
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isLogin}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunstions;
