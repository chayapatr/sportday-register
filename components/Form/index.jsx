import React, {Fragment} from 'react'

import './form.styl'

const Form = () => {
    return (
        <Fragment>
            <h1>Contact</h1>
            <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div>
                    <label>Your Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" />
                </div>
                <button type="submit">Send</button>
            </form>
        </Fragment>
    )
}

export default Form