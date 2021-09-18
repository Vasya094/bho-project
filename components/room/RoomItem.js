import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const RoomItem = ({ room }) => {
    const { t } = useTranslation()
    return (
        <div className="col-sm-12 col-md-6 col-lg-10 my-3">
            <div className="p-2 d-flex flex-row">
                <Image
                    className="card-img-top mx-auto"
                    src={room.images[0].url}
                    height={170}
                    width=""
                />
                <div className="ml-5 justify-content-md-between card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link href={`/room/${room._id}`}>
                            <a>{room.title}</a>
                        </Link>
                    </h5>
                    <Link href={`/room/${room._id}`}>
                        <button className="btn btn-block view-btn">
                            {t("common:view_details")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RoomItem
