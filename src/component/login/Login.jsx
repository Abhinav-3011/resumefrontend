import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from '../nav/Nav'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
import { true_false, } from '../../app/Loginboolencheck'
import axios from "axios"
import "./login.css"
const Login = () => {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(true);

  const [data, setData] = useState({
    email: "",
    password:"",
  });

const showclose = () => setShow(!show);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
  

 

    }
    let res = await axios.post(" http://localhost:8000/login", {
      data
    })
   
    if (res.data)
    {
      dispatch(true_false())
    }
    
    else
    {
      console.log(res.data)
    }
    setValidated(true);
  };
      
  const setChangeData = (e) =>
  {

    const { name, value }=e.target
    setData((old_data) =>
    {
      
      return { ...old_data, [name]:value }
  })
  }
  


  return (
    <>
      <Nav />
   

      <Modal show={show} onHide={showclose} className='modal_main' >
        <Modal.Header closeButton>
          <Modal.Title>Login </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        <Form noValidate validated={validated} method='POST' onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>email</Form.Label>
          <Form.Control
            required
            type="email"
                  placeholder="example12@gmail.com"
                  value={data.email}
                  name="email"
                  onChange={setChangeData}
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="password"
                  placeholder="BhawiXXXXX"
                  
                  name="password"
                  value={data.password}
                  onChange={setChangeData}
       
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      
      </Row>
     
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showclose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Login