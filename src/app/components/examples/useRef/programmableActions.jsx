import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            ></input>
            <button
                className="btn btn-primary me-2"
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                Focus
            </button>
            <button
                className="btn btn-primary"
                onClick={() => {
                    inputRef.current.style.width = "100px";
                }}
            >
                Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
