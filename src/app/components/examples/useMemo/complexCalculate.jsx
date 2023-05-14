import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial()");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [value2, setValue2] = useState(false);
    // const fact = runFactorial(value);
    const fact = useMemo(() => runFactorial(value), [value]);

    useEffect(() => {
        console.log("render!");
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>
                    Fact {value} = {fact}
                </p>
                <button
                    className="btn btn-primary me-2"
                    onClick={() => setValue(value + 10)}
                >
                    Inc
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue(value - 10)}
                >
                    Dec
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={
                        "btn " + (value2 ? "btn-primary" : "btn-secondary")
                    }
                    onClick={() => setValue2(!value2)}
                >
                    Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
