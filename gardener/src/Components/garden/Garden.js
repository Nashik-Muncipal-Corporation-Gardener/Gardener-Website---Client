import React from 'react'
import NavigationBar from '../NavigationBar'

const Garden = () => {


    return (
        <>
        <NavigationBar/>
         <div className='container col-md-12 float p-3'>
                <select className="form-select  w-25" aria-label="Default select example">
                    <option selected>Area Wise</option>
                    <option value="1">Ward Wise</option>

                </select>
            </div>
        <div>
           
            <div className='container'>
                <div className='row p-3'>
                    <h4 className='p-2'>Promod Mahajan Garden</h4>
                    <div className='col-md-4'>

                        <img src="https://www.suratmunicipal.gov.in/Images/Services/Gardens/westzone_morarjidesaiudhyan_thumb.jpg" className='img-fluid garden_img border p-1' />
                    </div>
                    <div className='col-md-8'>
                        <table className="table table-hover table-striped table-bordered border-success">
                            <thead>
                                <tr>
                                    <th scope="col">Area </th>
                                    <th scope="col">6138</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Establishment Year</th>
                                    <th scope="col">24/12/1997</th>
                                </tr>
                                <tr>
                                    <th scope="col">Facilities</th>
                                    <th scope="col">Water, Toilet, Play Equipment, Bridge & tunnel, water fall, statue of Moraraji Desai</th>
                                </tr>
                                <tr>
                                    <th scope="col">Uniqueness</th>
                                    <th scope="col">Last</th>
                                </tr>
                                <tr>
                                    <th scope="col">Timing</th>
                                    <th scope="col">10 am to 5 pm</th>
                                </tr>

                                <tr>
                                    <th scope="col">Address</th>
                                    <th scope="col">Last</th>
                                </tr>

                                <tr>
                                    <th scope="col">Location</th>
                                    <th scope="col"><a href='https://goo.gl/maps/3LV9Cfefok48n7no6'>Get Direction</a></th>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
            </div>


            <div className='container'>
                <div className='row p-3'>
                    <h4 className='p-2'>Promod Mahajan Garden</h4>
                    <div className='col-md-4'>

                        <img src="https://www.suratmunicipal.gov.in/Images/Services/Gardens/westzone_morarjidesaiudhyan_thumb.jpg" className='img-fluid garden_img border p-1' />
                    </div>
                    <div className='col-md-8'>
                        <table className="table table-hover table-striped table-bordered border-success">
                            <thead>
                                <tr>
                                    <th scope="col">Area </th>
                                    <th scope="col">6138</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Establishment Year</th>
                                    <th scope="col">24/12/1997</th>
                                </tr>
                                <tr>
                                    <th scope="col">Facilities</th>
                                    <th scope="col">Water, Toilet, Play Equipment, Bridge & tunnel, water fall, statue of Moraraji Desai</th>
                                </tr>
                                <tr>
                                    <th scope="col">Uniqueness</th>
                                    <th scope="col">Last</th>
                                </tr>
                                <tr>
                                    <th scope="col">Timing</th>
                                    <th scope="col">10 am to 5 pm</th>
                                </tr>

                                <tr>
                                    <th scope="col">Address</th>
                                    <th scope="col">Last</th>
                                </tr>

                                <tr>
                                    <th scope="col">Location</th>
                                    <th scope="col"><a href='https://goo.gl/maps/3LV9Cfefok48n7no6'>Get Direction</a></th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
            </div>

        </div>
        </>
    )


}

export default Garden
