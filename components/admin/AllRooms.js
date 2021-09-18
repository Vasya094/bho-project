import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MDBDataTable } from 'mdbreact'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import useTranslation from 'next-translate/useTranslation';
import { getAdminRooms, deleteRoom } from '../../redux/actions/roomActions'
import { DELETE_ROOM_RESET } from '../../redux/constants/roomConstants'

const AllRooms = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, error, rooms } = useSelector(state => state.allRooms)
    const { error: deleteError, isDeleted } = useSelector(state => state.room)

    useEffect(() => {

        dispatch(getAdminRooms())
debugger
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            toast.erroe(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            router.push('/admin/rooms')
            dispatch({ type: DELETE_ROOM_RESET })
        }

    }, [dispatch, deleteError, isDeleted])


    const setRooms = () => {
        const data = {
            columns: [
                {
                    label: t("common:title"),
                    field: 'title',
                    sort: 'asc'
                },
                {
                    label: t("common:category"),
                    field: 'category',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }

        rooms && rooms.forEach(room => {
            data.rows.push({
                id: room._id,
                title: room.title,
                category: room.category,
                actions:
                    <>
                        <Link href={`/admin/rooms/${room._id}`}>
                            <a className="btn btn-primary">
                                <i className="fa fa-pencil"></i>
                            </a>
                        </Link>

                        <button className="btn btn-danger mx-2" onClick={() => deleteRoomHandler(room._id)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </>
            })
        })

        return data;

    }

    const deleteRoomHandler = (id) => {
        dispatch(deleteRoom(id))
    }


    return (
        <div className='container container-fluid'>
            {loading ? <Loader /> :
                <>
                    <h1 className='my-5'>{`${rooms && rooms.length} ${t("common:news")}`}

                        <Link href='/admin/rooms/new'>
                            <a className="mt-0 btn text-white float-right new-room-btn">{t("common:new_news")}</a>
                        </Link>

                    </h1>


                    <MDBDataTable
                        data={setRooms()}
                        className='px-3'
                        bordered
                        striped
                        hover
                    />

                </>
            }
        </div>
    )
}

export default AllRooms
