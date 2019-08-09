import React, {Fragment} from 'react'
import Head from 'next/head'

import 'stylus/index.styl'

import Form from '../components/form'

const Index  = () => {
    return (
        <Fragment>
            <Head>
                Register
            </Head>
            <Form />
        </Fragment>
    )
}
export default Index