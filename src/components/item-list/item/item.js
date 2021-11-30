import React from 'react';

import s from './Item.module.sass';

const Item = React.memo(({id, imageUrl, name, count, size: {width, height}, weight, comments}) => {
    return <li className={s.itemWrapper}>
        <span>Item name: {name} </span>
        <span>Item count: {count} </span>
    </li>
});

export default Item;