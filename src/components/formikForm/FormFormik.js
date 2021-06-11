import React from 'react'

const FormFormik = () => {
    return (
        <div>
            <form>
                <label>First name:</label><br />
                <input type="text" /><br /><br />

                <label>Email:</label><br />
                <input type="email" /><br /><br />

                <label>password:</label><br />
                <input type="password" /><br /><br />

                <select name='select'>
                    <option value="">Selectiona una</option>
                    <option value="value1">Value 1</option>
                    <option value="value2" selected>Value 2</option>
                    <option value="value3">Value 3</option>
                </select><br /><br />

                <input type="checkbox" />{' '}<label>Acepta terminos y condiciones</label><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FormFormik
