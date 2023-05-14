import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render LogOutButton");
    });
    return (
        <button className="btn btn-primary me-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = { onLogOut: PropTypes.func };

function areEqual(prevProps, nextProps) {
    // из-за useCallback будет равенство
    return prevProps.onLogOut === nextProps.onLogOut;
}
const MemoLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [data, setData] = useState(false);

    // чтобы параметр onLogOut для MemoLogOutButton не менялся - используем useCallback
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <MemoLogOutButton onLogOut={handleLogOut} />
            <button className="btn btn-primary" onClick={() => setData(!data)}>
                Render
            </button>
        </>
    );
};

export default MemoWithUseCallbackExample;
