import React , {useState} from 'react'
import classes from './Multiply.module.css'
import {Button} from "react-bootstrap"
function Multiply() {

  const [answer , setanswer] = useState()
  const [num1 , setnum1] = useState(0)
  const [num2 , setnum2] = useState(0)

    return (
        <div className={classes.contain}>
          <h3 className="text-primary">this page Multiplies numbers</h3>
          <h2 className={classes.answer}>{answer}</h2>
        <input type="number" className="form-control" onChange={(eve)=>setnum1(eve.target.value)} value={num1}/>
        <input type="number"  className="form-control"  onChange={(eve)=>setnum2(eve.target.value)} value={num2}/>
        <Button onClick={()=>setanswer(Number(num1)*Number(num2))}>Multiply x</Button>
        </div>
    )
}

export default Multiply