import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ButtonLoader from '../layout/ButtonLoader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { newRoom, clearErrors } from '../../redux/actions/roomActions'
import { NEW_ROOM_RESET } from '../../redux/constants/roomConstants'
import useTranslation from 'next-translate/useTranslation';

const NewRoom = () => {
    const { t } = useTranslation()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('News')

    const [images, setImages] = useState([])
    const [imagesPreview, setImagesPreview] = useState([])

    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, error, success } = useSelector(state => state.newRoom)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            router.push('/admin/rooms')
            dispatch({ type: NEW_ROOM_RESET })
        }

    }, [dispatch, error, success])

    const submitHandler = (e) => {
        e.preventDefault()

        const roomData = {
            title,
            description,
            category,
            images
        }
debugger
        if (images.length === 0) return toast.error('Please upload images.')

        dispatch(newRoom(roomData))

    }


    const onChange = (e) => {

        const files = Array.from(e.target.files)

        // setImages([]);
        // setImagesPreview([]);
debugger
        files.forEach(file => {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages(oldArray => [...oldArray, reader.result]);
                    debugger
                    setImagesPreview(oldArray => [...oldArray, reader.result]);
                }
            }

            reader.readAsDataURL(file)
debugger
        })

    }


    return (
        <div className="container container-fluid">
            <div className="row wrapper">
                <div className="col-10 col-lg-8">
                    <form className="shadow-lg" onSubmit={submitHandler} enctype="multipart/form-data">
                        <h1 className="mb-4">{t("common:new_news")}</h1>
                        <div className="form-group">
                            <label htmlFor="name_field">{t("common:title")}</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description_field">{t("common:description")}</label>
                            <textarea
                                className="form-control"
                                id="description_field"
                                rows="8"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category_field">{t("common:category")}</label>
                            <select
                                className="form-control"
                                id="room_type_field"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {['News',
                                    'Collect',
                                    'Campaign'].map(category => (
                                        <option key={category} value={category}>{t(`common:${category}`)}</option>
                                    ))}
                            </select>
                        </div>


                        <div className="form-group mt-4">
                            <label>{t('common:images')}</label>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    name="room_images"
                                    className="custom-file-input"
                                    id="customFile"
                                    onChange={onChange}
                                    multiple
                                />
                                <label className="custom-file-label" htmlFor="customFile">
                                    {t('common:choose_images')}
                                </label>
                            </div>

                            {imagesPreview.map(img => (

                                <img
                                    src={img}
                                    key={img}
                                    alt="Images Preview"
                                    className="mt-3 mr-2"
                                    width="55"
                                    height="52"
                                />

                            ))}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block new-room-btn py-3"
                            disabled={loading ? true : false}
                        >
                            {loading ? <ButtonLoader /> : t("common:create")}
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default NewRoom
