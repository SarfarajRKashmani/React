import React, { useState } from 'react'

const Calc = () => {
  let [n1, setn1] = useState(0)
  let [n2, setn2] = useState(0)
  let [result, setresult] = useState(null)
  let [opr, setopr] = useState("+")

  const handleInput = (e) => {
    setn2(e.target.value)
  }
  const handleopr=(e)=>{
    setopr(e.target.value)
  }
  const handleresult = () => {
    if (opr == "+") setresult(Math.round((Number(n1) + Number(n2))*100)/100)
      if (opr == "-") setresult(Math.round((Number(n1) - Number(n2))*100)/100)
        if (opr == "*") setresult(Math.round((Number(n1) * Number(n2))*100)/100)
          if (opr == "/") setresult(Math.round((Number(n1) / Number(n2))*100)/100)
            if (opr == "%") setresult(Math.round((Number(n1) % Number(n2))*100)/100)
  }

  return (
    <center>
     <h1>Calc</h1>
    <div className="cal">
      <input type="number" placeholder="enter number 1" onChange={(e) => setn1(e.target.value)} />
      <select name="opr" onChange={handleopr}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
      </select>
      <input type="number" placeholder="enter number 1" onChange={handleInput} />
      <button className="btn" onClick={handleresult}>Result</button>
    </div>
   {result !== null ? <center><h2>Result: {result}</h2></center>:null}
    </center>
  )
}

export default Calc



