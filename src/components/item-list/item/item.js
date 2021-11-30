import React from 'react';

import s from './Item.module.sass';

const Item = ({id, imageUrl, name, count, size: {width, height}, weight, comments}) => {
    return <div className={s.itemWrapper}>
        {`Item ${id}`}
    </div>
}

export default Item;