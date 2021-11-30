import React from 'react';

import s from './Item.module.sass';

const Item = React.memo(({id, imageUrl, name, count, size: {width, height}, weight, comments}) => {
    // const img = require.context('../../../asset/' + imageUrl, true);
    // const img = '../../../asset/' + imageUrl;
    return <li className={s.itemWrapper}>
        <div className={s.imgWrapper}>
            <img src={process.env.PUBLIC_URL + `${imageUrl}`} alt='item-img' />
        </div>
        <div className={s.productInfoWrapper}>
            <span>Item name: {name}</span>
            <span>Item count: {count}</span>
        </div>
    </li>
});

export default Item;