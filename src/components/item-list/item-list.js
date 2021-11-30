import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {showProductList} from '../../redux/product-data-reducer';
import {getProductList} from '../../redux/product-data-selectors';
import Modal from '../common';
import CustomButton from '../common/custom-button';
import CreateProduct from './create-product';
import Item from './item';

import s from './ItemList.module.sass';

const ItemList = ({items, showProductList}) => {

    useEffect(showProductList, []);

    const [isEdit, setIsEdit] = useState(false);

    const [isShowModal, setIsShowModal] = useState(false);

    const itemsList = items.sort((item, nextItem) => (item.name > nextItem.name) ? 1 : -1).map(({id, imageUrl, name,
        count, size, weight, comments}) => <Item
            key={id}
            id={id}
            imageUrl={imageUrl}
            name={name}
            count={count}
            size={size}
            weight={weight}
            comments={comments} />);

    return <div className={s.itemListWrapper}>
        {itemsList}
        {!isEdit
            ? <CustomButton callbackOnClick={() => setIsEdit(true)}>
                Add new product
            </CustomButton>
            : <CreateProduct setIsEdit={setIsEdit} />}
        {isShowModal && <Modal />}
    </div>
}

const mapStateToProps = (state) => ({
    items: getProductList(state)
});


export default connect(mapStateToProps, {showProductList})(ItemList);;