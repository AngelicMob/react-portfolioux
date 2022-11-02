import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './_Card.scss'
import { useNavigate } from 'react-router-dom';
const CaseCard = (props) => {
  const navigate = useNavigate()
  
    return(
        <Card style={{ width: '24rem', height: "30rem", background: "teal", color: "white" }}>
        <Card.Img variant="top" src={props.image} style={{height: "200px"}} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div style={{position: "absolute", bottom:"30px", width: "90%"}}>
          <Button action={()=>navigate(props.to)} variants="inverted full" color="">Read More</Button>
          </div>
          
        </Card.Body>
      </Card>
    )
}

export default CaseCard;