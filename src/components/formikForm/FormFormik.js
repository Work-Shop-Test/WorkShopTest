import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const FormFormik = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            option: '',
            checkbox: false
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, 'Must be 15 characters or less').min(1, 'La ectructura no es valida').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(10, 'Contraseña min 8 caracteres').required('Required'),
            password2: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Contraseñas no son iguales')
          }),
        onSubmit: values => {
            // dispatch(startRegisterWithEmailPasswordName(values.email, values.password, values.name))
            alert('agregado');
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>First name:</label><br />
                <input type="text"
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange} /><br /><br />

                <label>Email:</label><br />
                <input type="email" 
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange} /><br /><br />

                <label>password:</label><br />
                <input type="password" 
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}/><br /><br />

                <select name='option'
                    value={formik.values.option}
                    onChange={formik.handleChange}>
                    <option value="" selected>Selectiona una</option>
                    <option value="value1">PrimerValor</option>
                    <option value="value2">SegundoValor</option>
                    <option value="value3">TercerValor</option>
                </select><br /><br />

                <input type="checkbox"
                    name='checkbox'
                    value={formik.values.checkbox}
                    onChange={formik.handleChange}/>{' '}<label>Acepta terminos y condiciones</label><br /><br />

                <input type="submit" value="Submit" onClick={formik.handleReset} />
            </form>
        </div>
    )
}

export default FormFormik
