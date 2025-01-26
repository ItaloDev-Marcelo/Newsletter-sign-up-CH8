import { useState } from "react"


export default function Form({setShowBlockSucess,hundleUpdate}) {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(true)

    function hundleChange(e) {
      setEmail(e.target.value)
    }

  
    function hundleSubmit(e) {
      e.preventDefault()
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
      setError(pattern.test(email) ? true : false)
      
      setShowBlockSucess(!pattern.test(email) ? true : false)

      pattern.test(email) ? hundleUpdate() : null
    }


    

    return (
      <div>
      <form  >
         <div>
            <label htmlFor="email">Email Address</label>
            <p id='error-txt' className={error ? 'sms' : 'sms error'}>Valid email required</p>
         </div>
        <input className={error ? 'email' : 'email error'}
         type="email" name="email" placeholder='email@company.com' id="email" onChange={(e) => hundleChange(e)} required/>
         <br /><br />
        <button type="submit" onClick={hundleSubmit}>Subscribe to monthly newsletter</button>
      </form>
      </div>
    )
}