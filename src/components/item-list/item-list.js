import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {showProductList} from '../../redux/product-data-reducer';
import {getProductList} from '../../redux/product-data-selectors';
import Modal from '../common';
import Item from './item';

import s from './ItemList.module.sass';

const ItemList = ({items, showProductList}) => {

    useEffect(showProductList, []);

    const itemsList = items.map(({id, imageUrl, name,
        count, size, weight, comments}) => <Item
            id={id}
            imageUrl={imageUrl}
            name={name}
            count={count}
            size={size}
            weight={weight}
            comments={comments} />);

    return <div className={s.itemListWrapper}>
        {itemsList}
        <Modal />
    </div>
}

const mapStateToProps = (state) => ({
    items: getProductList(state)
});


export default connect(mapStateToProps, {showProductList})(ItemList);;