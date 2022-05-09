import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./studentDetails.css"

const StudentDetails = () => {
  return (
    <>
    <h1>Student Details</h1>
    <Row className='studentDetailStyle'>
        <Col lg={6} >
          <div className="studentDetailPhoto">
            
          </div>
        </Col>
        <Col lg={6}>
          <div className="studentDetailInfo">
            <div> <b>Name</b>      - Bhawna Khatri</div>
            <div> <b>Hostel</b>    - Hall - 1</div>
            <div> <b>Room No.</b>    - S-302</div>
            <div> <b>Roll No.</b>  - 20BCS055</div>
            <div> <b>Branch</b>    - CSE</div>

          </div>

        </Col>
    </Row>
    
    
    
    </>
  )
}

export default StudentDetails