import axios from 'axios'
import {React,useState} from 'react'


const Cat=()=>{

  const initialValues={category_name:""};
  const[formValues,setFormvalues]=useState(initialValues)

const handlechange=(e)=>{
  const {name,value}=e.target
  setFormvalues({...formValues,[name]:value});
  console.log(formValues.category_name);
}


const FormCategory=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:3001/category",{
 feeddata:formValues  
    // uid:uid
  }).then((response)=>{
    console.log(response);
    alert("thank you for choosing the category")
    //window.location='http://localhost:3000
  })
  .catch(error=>{
    console.log(error);
  })
}



  return (
    <div>
      <section className="vh-100">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>CATEGORY</b></h2>
              <hr></hr>
              <form onSubmit={FormCategory}>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>category_name</b></label>
                  <input type="text" className="form-control form-control-lg"
                   name='category_name' value={formValues.category_name} 
                   onChange={handlechange}/>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Register</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Cat;