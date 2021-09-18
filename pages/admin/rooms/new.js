import React from 'react'
import { getSession } from 'next-auth/client'

import NewNews from '../../../components/admin/NewNews'
import Layout from '../../../components/layout/Layout'

const NewRoomPage = () => {
    return (
        <Layout title='New News'>
            <NewNews />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session || session.user.role !== 'admin') {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }

}

export default NewRoomPage
