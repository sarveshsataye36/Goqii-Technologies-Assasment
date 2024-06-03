import React from 'react'
import { Link } from 'react-router-dom';

export const List = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center' >
                <h3 className='py-3 mt-3'>
                    User List
                </h3>
                <Link className="btn btn-primary" to="/"> Add User</Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Sr No</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
