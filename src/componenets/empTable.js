import React from 'react'
import {store} from '../redux/store'

export default function empTable() {
    let data = store.getState()
    console.log(data)
    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>age</th>
                    <th>gender</th>

                </tr>
               <tr>
                   <td>{data.id}</td>
                   <td>{data.name}</td>
                    <td>{data.company}</td>              
                   <td>{data.age}</td> 
                   <td>{data.gender}</td>
               </tr>
            </table>
        </div>
    )
}
