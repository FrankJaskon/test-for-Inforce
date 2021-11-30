import React from 'react';

import s from './Modal.module.sass';

const Modal = React.memo((props) => {
    return <div className={s.modalWrapper}>
        Modal
    </div>
});

export default Modal;