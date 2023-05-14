import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const ref = useRef(0);
    const [temp, setTemp] = useState(false);

    useEffect(() => {
        ref.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>render count: {ref.current}</p>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setTemp(!temp);
                }}
            >
                Render
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
