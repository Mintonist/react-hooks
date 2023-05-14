import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [curState, setCurState] = useState("false");

    useEffect(() => {
        prevState.current = curState;
    }, [curState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prev state: {prevState.current}</p>
            <p>cur state: {curState}</p>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setCurState((prevState) =>
                        prevState === "false" ? "true" : "false"
                    );
                }}
            >
                Render
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
