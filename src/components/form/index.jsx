import { useState } from "react"
import Success from "./Success";


export default function Form() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(true)
    const [showTime, setShowTime] = useState(false)

    function hundleChange(e) {
      setEmail(e.target.value)
    }

  
    function hundleSubmit(e) {
      e.preventDefault()
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
      setError(pattern.test(email) ? true : false)
      
      setShowTime(pattern.test(email) ? true : false)
    }

    function reset() {
      setShowTime(!showTime)
      setError(false)
    }


    console.log("showtime in the form", showTime)
    

    return (
      <div>
      <form  className={!showTime ? 'form block' : 'from'} >
         <div>
            <label htmlFor="email">Email Address</label>
            <p id='error-txt' className={error ? 'sms' : 'sms error'}>Valid email required</p>
         </div>
        <input className={error ? 'email' : 'email error'}
         type="email" name="email" placeholder='email@company.com' id="email" onChange={(e) => hundleChange(e)} required/>
         <br /><br />
        <button type="submit" onClick={hundleSubmit}>Subscribe to monthly newsletter</button>
      </form>
      <Success reset={reset} showTime={showTime}/>
      </div>
    )
}