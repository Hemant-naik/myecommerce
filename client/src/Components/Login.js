import React, { useState } from 'react'
import login from "../Assets/login.png"
import axios from 'axios'

function Login() {
    const initialvalues = {username:"",password:""}
    const[formValues,setFormvalues] = useState(initialvalues)
    const[loginStatus,setLoginStatus] = useState('')

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormvalues({...formValues,[name]:value});
        console.log(formValues.username)
    }

    const FormLogin =(e)=>{
        //alert("hi")
        //console.log(formValues)
       // const logindata = JSON.stringify(formValues)
       console.log(formValues.username)
       e.preventDefault();
       axios.post("http://localhost:3001/login",{
        logindata:formValues

       }).then((response)=>{
        
        console.log(response.data);
        if(response.data.length>0)
        {
            //alert("hi")
            let utype=response.data[0].utype
            setLoginStatus('')
            localStorage.setItem('user',formValues.username)
            localStorage.setItem('log',utype)
            if(utype==="user")
            {
                window.location='http://localhost:3000/userhome';
            }

            if(utype==="admin")
            {
                window.location='http://localHost:3000/adminhome'
            }
        }
        else
        {
            setLoginStatus('Sorry...! Invalid username or Password')
        }
       })
       .catch(error =>{
        console.log(error)
       })
    }
  return (
    <div>
        <div className="contianer" style={{marginTop:"10px"}}>
        <div className="row">
            <div className='col-lg-6 mt-3'>
                <div className='card'>
                    <div className='card-header'>
        <h1 className="text-success"> Login Now</h1>
         </div>

         <div className='card-body'>
            <form onSubmit={FormLogin}>
        <div className="mt-3 mb-3">
            <label> Username </label>
            <input type="text" value={formValues.username} name="username" placeholder='Enter your username' onChange={handleChange}
             className="form-control w-50 border border-1 border-success" required/>
        </div>
        

        <div className="mt-3 mb-3">
            <label> Password </label>
            <input type="password" name="password" 
            placeholder='Enter your password' value={formValues.password} onChange={handleChange}
            className="form-control w-50 border border-1 border-success" required/>
        </div>
        
         <p> <button type='submit' value='Login' className="btn btn-success w-50"> Login Now </button></p>

         </form>
         <p className='text-danger'>{loginStatus}</p>
         <p className='text-primary'><a href={`/forgotpassword`}> Forgot Password </a></p>
    </div>
</div>
</div>
      
      <div className='col-lg-6'>
        <p><img src={login} width={600} height={400} alt='login'/> </p>
      </div>
      </div>
      </div>
      </div>
  )
}



export default Login