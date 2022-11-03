import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './_Card.scss'
import { useNavigate } from 'react-router-dom';
const CaseCard = (props) => {
  const navigate = useNavigate()
    return(
        <Card style={{ width: '22rem', height: "23rem", background: "teal", color: "white", marginTop: "50px" }}>
        <Card.Body>
          <Card.Title style={{marginTop:"20px"}}>{props.title}</Card.Title>
          <Card.Text style={{marginTop:"20px"}}>
            {props.description}
          </Card.Text>
          <div style={{position: "absolute", bottom:"30px",left:"30px", width: "80%"}}>
          <Button action={()=>navigate(props.to)} variants="inverted-outlined full" color="">Read More</Button>
          </div>
          
        </Card.Body>
      </Card>
    )
}

export default CaseCard;