import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FormControlLabel from '@mui/material/FormControlLabel';
import Nav from "../nav/Nav";
import Modal from "react-bootstrap/Modal";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDispatch } from 'react-redux'
import { true_false, } from '../../app/Loginboolencheck'
import "./register.css";
import axios from "axios"
const Register = () => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch()
  const [show, setShow] = useState(true);



 const [data, setData] = useState({
 firstName:"",
 lastName:"",
 fatherName:"",
 branchCode:"",
 email:"",
 gender:"",
 city:"",
 state:"",
 zip:"",
 rollno:"",
 mobile:"",
 password:"",
 institute:"",
 examinationCenter:"",
   subject: "",
   image:"",
 allsubject:[]
 })

 const collect_data = (e) => {
  const { name, value, files } = e.target;

  if (name === "image") {
    setData((oldData) => ({
      ...oldData,
      [name]: files[0], // Assuming you only want to upload one file
    }));
  } else {
    setData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }
};

  const showclose = () => setShow(!show);
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
    }

    
    let sub = data.subject.split(",");
    data.allsubject = sub;
    
  
    let value = data.subject.split(",");
    data.allsubject = value;

    console.log(data)
    const formdata = new FormData();
  formdata.append("firstName", data.firstName+data.lastName);

  formdata.append("fatherName", data.fatherName);
  formdata.append("branchCode", data.branchCode);
  formdata.append("email", data.email);
  formdata.append("gender", data.gender);
  formdata.append("city", data.city);
  formdata.append("state", data.state);
  formdata.append("zip", data.zip);
  formdata.append("rollno", data.rollno);
  formdata.append("mobile", data.mobile);
  formdata.append("password", data.password);
  formdata.append("institute", data.institute);
  formdata.append("examinationCenter", data.examinationCenter);
  formdata.append("image", data.image);
  formdata.append("allsubject", data.allsubject);

  console.log(formdata);
  
  try {
    let res = await axios.post("http://localhost:8000/register", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data)
    {
      dispatch(true_false())
    }
    
    else
    {
      console.log(res.data)
    }
    setValidated(true);
  } catch (error) {
    console.error(error);
  }

  };

  return (
    <>
      <Nav />

      <Modal show={show} onHide={showclose} className="modal_main">
        <Modal.Header closeButton>
          <Modal.Title>Sign up </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}  encType="multipart/form-data">
            <Row className="mb-2">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" name="firstName" value={data.firstName} onChange={collect_data} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" onChange={collect_data} name="lastName" value={data.lastName} placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Father Name</Form.Label>
              <Form.Control required type="text" onChange={collect_data} name="fatherName" value={data.fatherName} placeholder="Father name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Branch Name</Form.Label>
              <Form.Control required type="text" onChange={collect_data} name="branchCode" value={data.branchCode} placeholder="Branch name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
         
          
              
              
          
            
              
              
              
      
              
              
              
            
              
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="abc@example"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    onChange={collect_data}
                  value={data.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a email id.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>





              <Form.Group as={Col} md="9" controlId="validationCustom01">
              <Form.Label>Gender</Form.Label>
                <RadioGroup
                value={data.gender}
                  defaultValue="female"
                  onChange={collect_data}
              name="gender"
             
              sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  
            </RadioGroup>
              
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <input type="file" name="image" onChange={ collect_data} />
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={collect_data} type="text" placeholder="City" required name="city" value={data.city} />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={collect_data} type="text" placeholder="State" name="state" value={data.state} required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={collect_data} type="number" name="zip" value={data.zip} placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Roll NO</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Roll Number"
                  required
                  onChange={collect_data}
                  name="rollno"
                  value={data.rollno}
                  
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a vaild Roll No.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control onChange={collect_data} type="number" placeholder="Mobile" name="mobile" value={data.mobile} required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid mobile No.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label>password</Form.Label>
                <Form.Control onChange={collect_data} type="password" placeholder="password" name="password" value={data.password} required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>

             
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label>Institute  Name</Form.Label>
                <Form.Control onChange={collect_data} type="text" placeholder="Institute Name" name="institute" value={data.institute} required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Institute Name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationCustom05">
              <Form.Label>Examination Center  Name</Form.Label>
              <Form.Control onChange={collect_data} type="text" name="examinationCenter" value={data.examinationCenter} placeholder="Examination Center Name" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Examination Center Name.
              </Form.Control.Feedback>
            </Form.Group>
                           
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text-area"
                  placeholder="Subject Name with, example english , hindi"
                  required
                  name="subject"
                  value={data.subject}
                  onChange={collect_data}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid subject Name with ,.
                </Form.Control.Feedback>
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
  );
};

export default Register;
