import React from 'react'

const Calc = () => {
//     let [n1,setn1]=useState(0)
//    let[n2,setn2]=useState(0)
//    let[result,setresult]=useState(0)
  return (
    <div>
      <input type="number" placeholder="enter number 1" />
      <select name="" id="">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" placeholder="enter number 1" />
    </div>
  )
}

export default Calc
