import React from 'react';
import classNames from 'classnames';

import s from './CustomButton.module.sass';

const CustomButton = React.memo(({type, wrapClassName = '', btnClassName = '',
    text, callbackOnClick, isDisabled, children}) => {
    return (
        <div className={classNames(s.button__wrap, wrapClassName)} >
            <button
                disabled={isDisabled}
                type={type || 'button'}
                className={classNames(s.button__submit, btnClassName)}
                onClick={callbackOnClick} >
                {text || children}
            </button>
        </div>
    )
});

export default CustomButton;