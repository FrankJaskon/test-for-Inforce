import classNames from 'classnames';
import React from 'react';
import CustomButton from '../custom-button';

import s from './TwoButtons.module.sass';

const TwoButtons = React.memo(({wrapClassName, onCancel, onSave}) => {
    return <div className={classNames(s.wrapper, wrapClassName)}>
        <CustomButton callbackOnClick={onCancel} btnClassName={s.cancelButton}>Cancel</CustomButton>
        <CustomButton type='submit' callbackOnClick={onSave}>Save</CustomButton>
    </div>
});

export default TwoButtons;