import React , {useState} from 'react'

const Add = () => {
  const [answer , setanswer] = useState()
  const [num1 , setnum1] = useState(0)
  const [num2 , setnum2] = useState(0)

    return (
        <div>
          <h3>this page Adds numbers</h3>
          <p>{answer}</p>
        <input type="text" onChange={(eve)=>setnum1(eve.target.value)} value={num1}/>
        <input type="text" onChange={(eve)=>setnum2(eve.target.value)} value={num2}/>
        <button onClick={()=>setanswer(Number(num1)+Number(num2))}>Add + </button>
        </div>
    )
}

export default Add;
