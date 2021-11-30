import React from 'react';
import {Field, withFormik} from 'formik';

import s from './CreateProduct.module.sass';
import TwoButtons from '../../common/two-buttons/two-buttons';
import {validateTextFieldCreator} from '../../common/validators';

const CreateProductForm = React.memo(({setIsEdit, values, touched, errors, handleChange, handleBlur, handleSubmit}) => {
    return <form onSubmit={handleSubmit} className={s.formWrapper}>
        <h3 className={s.title}>Create new product</h3>
            <div className={s.fieldsWrapper}>
                <label name='productName' className={s.itemLabel}>Product name:</label>
                <div>
                    <Field className={s.input}
                    validate={validateTextFieldCreator()}
                    name='productName'
                    id='productName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName || ''} ></Field>
                    {errors.productName && touched.productName && <div className={s.error}>{errors.productName}</div>}
                </div>
                <label name='productCount' className={s.itemLabel} >Product count:</label>
                <div>
                    <Field className={s.input}
                    validate={validateTextFieldCreator()}
                    name='productCount'
                    id='productCount'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productCount || ''} ></Field>
                    {errors.productCount && touched.productCount && <div className={s.error}>{errors.productCount}</div>}
                </div>
                <TwoButtons onSave={() => {}} onCancel={() => {setIsEdit(false)}} wrapClassName={s.btnGroup} />
            </div>
    </form>
});

const CreateProduct = withFormik({
    mapPropsToValues: (props) => ({
        productName: '',
        productCount: ''
    }),
    handleSubmit: (values, {props: {callbackOnClick}}) => {
        callbackOnClick(values);
    },
    displayName: 'create-product-form'
})(CreateProductForm);

export default CreateProduct;