import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./studentDataStyle.css"

const StudentData = () => {
  return (
    <div className='studentDataDiv'>
        <Row>
            <Col lg = {4}> Bhawna Khatri</Col>
            <Col lg = {4}> S-302</Col>
            <Col lg = {4}> 07:15</Col>
        </Row>

   </div>
  )
}

export default StudentData