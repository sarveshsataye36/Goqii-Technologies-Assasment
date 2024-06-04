import React from 'react'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import Notify from '../../components/Notify/Notify';
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";

export const List = () => {

        const [lists, setLists] = useState([]);
      
        useEffect(() => {
          const getAllUser = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8000/api/user/');
              setLists(response.data.data.user);
            } catch (error) {
                Notify.error('Unable to Fetch User');
              setLists([]);
            }
          };
      
          getAllUser();
        }, []);

        const deleteUser = async (id) => { 
            try {
                await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
                Notify.success('User deleted sucessfully');
              } catch (error) {
                Notify.error('Unable to Delete User');
              }
        }


    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center' >
                <h3 className='py-3 mt-3'>
                    User List
                </h3>
                <Link className="btn btn-primary" to="/"> Add User</Link>
            </div>
            <table className="table table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th scope="col">Sr No</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    lists.map((list, index) =>(
                        <tr key={list.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{list.name}</td>
                        <td>{list.email}</td>
                        <td>{list.DOB}</td>
                        <td>
                        <Link to={`/edit-user/${list.id}`} className="btn btn-primary me-2">
                            <MdOutlineModeEdit />
                        </Link>

                        <button className="btn btn-danger me-2">
                            <MdDelete onClick={e  => deleteUser(list.id)} />
                        </button>
                        
                        </td>
                    </tr>
                    ))

                }
                </tbody>
            </table>
        </div>
    )
}
