import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function  RegisterList(props){
  const items = props.items;
  const registerList = items.map(item =>
    {
      return(
        <group className='register reg-list container-fluid'>           
             <div className="col-md-6  container register_section">
               <fieldset className=''>
                       <div className='row'>
                          <label className='col-lg-4'>Name</label>
                          <div className='col-lg-8'> 
                            {item.name}
                          </div>
                       </div>
                       <div className='row'>
                          <label className='col-lg-4'>Address</label>
                          <div className='col-lg-8'> 
                            {item.address}
                          </div>
                       </div>
                       <div className='row'>
                          <label className='col-lg-4'>Gender</label>
                          <div className='col-lg-8'> 
                            {item.gender}
                          </div>
                       </div>
                       <div className='row'>
                          <label className='col-lg-4'>Qualification</label>
                          <div className='col-lg-8'> 
                            {item.qualification}
                          </div>
                       </div>
                       <div className='row'>
                          <label className='col-lg-4'>Email</label>
                          <div className='col-lg-8'> 
                            {item.email}
                          </div>
                       </div>
                       <div className='row'>
                          <label className='col-lg-4'>Phone</label>
                          <div className='col-lg-8'> 
                            {item.phone}
                          </div>
                       </div>
              </fieldset>
           </div>
     </group>
        
      )
    })
  return(
  <div>
    {registerList}
  </div>

  )
}


export default RegisterList;