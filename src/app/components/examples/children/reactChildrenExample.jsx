import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(data);
    }, [data]);

    const hadleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // React.children.map работает как с массивом так и с одним ребёнком, обычный map() так не может

    return React.Children.map(children, (item) => {
        React.cloneElement(item, {
            ...item.props,
            onChange: hadleChange,
            value: data[item.props.name] || ""
        });
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="email" />
                <TextField name="pass" label="pass" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
