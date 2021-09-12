import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RoomItem = ({ room }) => {
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
                            <a>{room.name}</a>
                        </Link>
                    </h5>

                    <button className="btn btn-block view-btn">
                        <Link href={`/room/${room._id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoomItem
