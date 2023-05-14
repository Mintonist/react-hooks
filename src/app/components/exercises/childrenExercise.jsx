import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const NumChildComponent = ({ children }) => {
    return React.Children.map(children, (item, index) => (
        <>
            {index + 1} {item}
        </>
    ));
};
NumChildComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <NumChildComponent>
                <Component />
                <Component />
                <Component />
            </NumChildComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
