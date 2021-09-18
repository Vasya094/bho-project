import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/userActions'
import { signOut } from 'next-auth/client'
import { Dropdown, Button, Navbar } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next/router'

const Header = () => {
    const { t } = useTranslation()

    const [currentLang, setCurrentLang] = useState('ar')

    const dispatch = useDispatch()

    const { user, loading } = useSelector(state => state.loadedUser)

    useEffect(() => {
        if (!user) {
            dispatch(loadUser())
        }
    }, [dispatch, user])


    const logoutHandler = () => {
        signOut();
    }

    const setLang = (locale) => {
        setCurrentLang(locale)
        Router.push('/', undefined, { locale })
    }

    return (
        <nav className="navbar row justify-content-center sticky-top">
            <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <Dropdown variant="flat" size="xxl">
                            <Dropdown.Toggle variant="flat" id="dropdown-basic">
                                BHO
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link href='/'>
                                        <a className="dropdown-item">{t('common:home')}</a>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href='/news'>
                                        <a className="dropdown-item">{t('common:news')}</a>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href='/about'>
                                        <a className="dropdown-item">{t('common:about')}</a>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href='/contacts'>
                                        <a className="dropdown-item">{t('common:contacts_info')}</a>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className="col-3 mt-3 mt-md-0 text-center">

                    {user ? (
                        <div className="ml-4 dropdown d-line">
                            <a
                                className="btn dropdown-toggle mr-4"
                                id='dropDownMenuButton'
                                data-toggle='dropdown'
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span>{user.name}</span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby='dropDownMenuButton'>

                                {user.role === 'admin' && (
                                    <>

                                        <Link href='/admin/rooms'>
                                            <a className="dropdown-item">{t('common:news')}</a>
                                        </Link>

                                        <Link href='/admin/users'>
                                            <a className="dropdown-item">{t('common:users')}</a>
                                        </Link>
                                        <hr />

                                    </>
                                )}

                                <Link href='/me/update'>
                                    <a className="dropdown-item">{t('common:profile')}</a>
                                </Link>

                                <Link href='/'>
                                    <a className="dropdown-item text-danger" onClick={logoutHandler}>{t('common:logout')}</a>
                                </Link>

                            </div>

                        </div>
                    ) :
                        !loading && <Link href='/login'>
                            <a className="btn text-white login-header-btn">{t('common:auth')}</a>
                        </Link>
                    }


                </div>
                <div>
                    <Dropdown variant="flat" size="xxl">
                        <Dropdown.Toggle variant="flat" id="dropdown-basic">
                            {t("common:lang_change")}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setLang('ar')}>AR</Dropdown.Item>
                            <Dropdown.Item onClick={() => setLang('en')}>EN</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}

export default Header
