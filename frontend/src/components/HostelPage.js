import React from 'react'
import "./hostelPage.css"
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StudentData from "./StudentData"
import { useNavigate } from 'react-router-dom';


const HostelPage = () => {

  const navigate = useNavigate();

  return (
    <div className='hostelPageStyle'>
    <h1>Hall - 1</h1>

    <Row style={{width:"95%" , alignItems:"center"}}>
      <Col lg={6} md={6} sm={12} style={{marginLeft:"50px" , width:"45%"}}>
        <h2>Inside - 20</h2>

        <Row style={{background:"#F3F9FF", fontSize:"18px" , color:"black" , width:"85%" , marginLeft:"10px" , padding:"1%"}}>
          <Col lg={4}>Student Name</Col>
          <Col lg={4}>Room</Col>
          <Col lg={4}>InTime</Col>
        </Row>

        <Row style={{background:"#C4CFDB" , height:"482px" , width:"85%" , marginLeft:"10px" , overflowY:"scroll" }}>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>

   

        </Row>

      </Col>










      <Col lg={6} md={6} sm={12} style={{marginLeft:"50px" , width:"45%"}}>
        <h2>Outside - 10</h2>

        <Row style={{background:"#F3F9FF", fontSize:"18px" , color:"black" , width:"85%" , marginLeft:"10px" , padding:"1%"}}>
          <Col lg={4}>Student Name</Col>
          <Col lg={4}>Room</Col>
          <Col lg={4}>OutTime</Col>
        </Row>

        <Row style={{background:"#C4CFDB" , height:"482px" , width:"85%" , marginLeft:"10px" , overflowY:"scroll" }}>
        
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>
        <button type="button" onClick={() => navigate('/studentDetails')}><StudentData/></button>

   

        </Row>

      </Col>



    </Row>
    </div>
  )
}

export default HostelPage