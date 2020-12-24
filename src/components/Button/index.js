import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, type, size, onClick, isLoading, isSubmit, isHidden, isDisabled }) => {
    if (!isHidden) {
        return (
            <button
                type={isSubmit ? 'submit' : 'button'}
                className={`btn btn-${type} ${size === 'small' ? 'btn-sm' : ''}`}
                onClick={onClick}
                disabled={isLoading || isDisabled}
            >
                {value}
            </button>
        );
    }
    return null;
};

Button.defaultProps = {
    value: '',
    size: null,
    isLoading: false,
    isSubmit: false,
    isHidden: false,
    isDisabled: false,
    onClick: (i) => i
};

Button.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
    isSubmit: PropTypes.bool,
    size: PropTypes.string,
    isHidden: PropTypes.bool,
    isDisabled: PropTypes.bool
};

export default Button;
