import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import { submitForm } from '../redux/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

export default function EmployeeForm() {
const [empData, setEmpData] = useState({
    id:"",
    name:"",
    age:"",
    company:"",
    gender:''
})

 const dispatch = useDispatch()
 const history = useHistory();
 
const handlechange = (event) =>{
    setEmpData({...empData, [event.target.name]:event.target.value})
}

const handleSubmit =(event) =>{
    event.preventDefault();
    dispatch(submitForm(empData))

    setEmpData({
        id:"",
        name:"",
        age:"",
        company:"",
        gender:''
    })
    history.push("/employees")
}

    return (
        <div>
            <Form onSubmit={handleSubmit}>

            <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="ID" name="id" onChange={handlechange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" onChange={handlechange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Age" name="age" onChange={handlechange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" name="company" onChange={handlechange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Check type="radio" label="Male" name="gender" value="male" onChange={handlechange}/>
                    <Form.Check type="radio" label="Female" name="gender" value="female" onChange={handlechange}/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
