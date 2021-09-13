import React, { useState } from 'react'
import Link from 'next/link'

import { signIn } from 'next-auth/client'

import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'
import useTranslation from 'next-translate/useTranslation'

const Login = () => {
    const { t } = useTranslation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        })

        setLoading(false)

        if (result.error) {
            toast.error(result.error);
        } else {
            window.location.href = '/'
        }

    }


    return (
        <div className="container container-fluid">
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">{t("common:auth")}</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">{t("common:email")}</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">{t("common:password")}</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Link href="/password/forgot" className="float-right mb-4">{t("common:forgot_password")}</Link>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}
                        >
                            {loading ? <ButtonLoader /> : t("common:auth")}
                        </button>

                        <Link href="/register" className="float-right mt-3">{t("common:signup")}</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
