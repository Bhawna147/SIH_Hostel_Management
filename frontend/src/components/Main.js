import React from 'react'
import HostelBox from "./HostelBox"
import CountBox from './CountBox';
import "./main.css"
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const main = () => {

  const navigate = useNavigate();

  return (
    <>

    <div className = 'main-section' > 
      <h1>IIITDMJ HOSTELS</h1>

      <div className='hostelBoxSection'>


      <Row>
        <Col lg={4} md={12}> <button type="button" onClick={() => navigate('/hostelPage')}> <HostelBox/> </button> </Col>
        <Col lg={4} md={12}> <button type="button" onClick={() => navigate('/hostelPage')}> <HostelBox/> </button> </Col>
        <Col lg={4} md={12}> <button type="button" onClick={() => navigate('/hostelPage')}> <HostelBox/> </button> </Col>
      </Row>
    </div>



<div className='countSection'>
<Row>
  <Col lg={3} md={3}  style= {{fontSize:"20px", color:"rgba(0, 0, 0, 0.7)" , width:"auto" , margin:"30px"}}> Student <br/> Inside <br /> <CountBox/></Col>
  <Col lg={3} md={3}  style= {{fontSize:"20px", color:"rgba(0, 0, 0, 0.7)" , width:"auto" , margin:"30px"}}> Student <br/> Outside <br /> <CountBox/></Col>
  <Col lg={3} md={3}  style= {{fontSize:"20px", color:"rgba(0, 0, 0, 0.7)" , width:"auto" , margin:"30px"}}> Intruders <br/> Inside <br /> <CountBox/></Col>
  <Col lg={3} md={3}  style= {{fontSize:"20px", color:"rgba(0, 0, 0, 0.7)" , width:"auto" , margin:"30px"}}> Staff <br/> Inside <br /> <CountBox/></Col>
</Row>
</div>






    </div>
    </>
  )
}

export default main