import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateProp } from 'validation/validator';
import { isEmpty, isFunction } from 'lodash';
import classNames from 'classnames';

const TextInput = ({
    id,
    label,
    value,
    rules,
    onChange,
    type,
    placeholder,
    showValidationMessage
}) => {
    const [isModified, setisModified] = useState(showValidationMessage);

    useEffect(() => setisModified(showValidationMessage),
        [showValidationMessage])

    const message = isModified && !isEmpty(rules)
        ? validateProp(value, rules)
        : null;

    const isValid = isEmpty(message);
    const inputClass = classNames('form-control', {
        'is-invalid': !isValid
    });

    const handleChange = (event) => {
        setisModified(true);
        if (isFunction(onChange))
            onChange(event.target.value);
    }

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                value={value}
                type={type}
                className={inputClass}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {!isValid && <div className="invalid-feedback">{message}</div>}
        </div>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    rules: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    showValidationMessage: PropTypes.bool
};

TextInput.defaultProps = {
    placeholder: '',
    label: '',
    rules: {},
    showValidationMessage: false,
    value: ''
}

export default TextInput;
