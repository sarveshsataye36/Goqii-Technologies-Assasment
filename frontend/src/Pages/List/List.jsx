import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";

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
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">Sr No</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                        <MdOutlineModeEdit />
                        <MdDelete />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
