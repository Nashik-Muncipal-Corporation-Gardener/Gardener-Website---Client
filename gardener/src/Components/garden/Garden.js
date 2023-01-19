import React from 'react'
import Garden_data from './GardenData'

const Garden = () => {

    const Garden_info = (item) => {
        return (
            <div key={item.id}>
                <div className='row'>
                    <div className='col-md-3'>
                        <img className='img-fluid' src={item.img} />
                    </div>
                    <div>
                        <table>
                            <tr>{item.garden_area}</tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container-fluid text-center">
                <div className="row  justify-content-center">
                    {Garden_data.map(Garden_info)}
                </div>
            </div>
        </div>
    )
}

export default Garden
