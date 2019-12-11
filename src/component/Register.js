import React , {Component} from 'react';
import '../Style.scss'
import RegisterList from './registerList';

class Register extends Component {
    constructor(props){
       super(props);

       this.state = {
         items: [],
           fields: {},
           errors: {}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
        if(!fields["address"]){
         formIsValid = false;
         errors["address"] = "Cannot be empty";
      }
      if(!fields["qualification"]){
         formIsValid = false;
         errors["qualification"] = "Cannot be empty";
      }
      if(!fields["gender"]){
         formIsValid = false;
         errors["gender"] = "Cannot be empty";
      }
      if(!fields["phone"]){
         formIsValid = false;
         errors["phone"] = "Cannot be empty";
      }
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Cannot be empty";
      }
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

   addForm(e){
      e.preventDefault();
       const newItem = this.state.fields
       if(this.handleValidation()){
          const newItems = [...this.state.items, newItem]
         this.setState({
            items: newItems,
          
            fields:{
               name:'',
               address:'',
               qualification:'',
               email:'',
               phone:'',
               gender:''
            }
         })
        }else{
           alert("Form has errors.")
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render(){
        return (
            <div className='register login container-fluid'>           
               <form className='pt-5' onSubmit= {this.addForm.bind(this)}>
                    <div className="col-md-6 pt-5  container register_section">

                       <h3>Student Registration</h3>
                      <fieldset className='mt-4'>
                     
                              <div className='row'>
                                 <label className='col-lg-4'>Name</label>
                                 <div className='col-lg-8'> 
                                    <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                 </div>
                              </div>
                              <div className='row'>
                                 <label className='col-lg-4'>Address</label>
                                <div className='col-lg-8'>
                                <input ref="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                                 <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                                </div>
                              </div>
                              <div className='row'>
                                 <label className='col-lg-4'>Gender</label>
                                 <div className='col-lg-8'>
                                 <input ref="gender" type="text" size="30" placeholder="Gender" onChange={this.handleChange.bind(this, "gender")} value={this.state.fields["gender"]}/>
                                 <span style={{color: "red"}}>{this.state.errors["gender"]}</span>
                                 </div>
                              </div>
                              <div className='row'>
                                 <label className='col-lg-4'>Qualification</label>
                                 <div className='col-lg-8'>
                                 <input ref="qualification" type="text" size="30" placeholder="Qualification" onChange={this.handleChange.bind(this, "qualification")} value={this.state.fields["qualification"]}/>
                                 <span style={{color: "red"}}>{this.state.errors["qualification"]}</span>
                                 </div>
                              </div>
                              <div className='row'>
                                 <label className='col-lg-4'>Email</label>
                                 <div className='col-lg-8'>
                                 <input ref="email" type="email" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                 <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                 </div>
                              </div>
                              <div className='row'>
                                 <label className='col-lg-4'>Phone</label>
                                 <div className='col-lg-8'>
                                 <input ref="phone" type="number" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                                 <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                 </div>
                              </div>
                              <button className='regBtn mt-3  m-2'>Register</button>
                     </fieldset>
                  </div>

              </form>
            { this.state.items!='' ?
                 <span>
                  <p className='text-center pt-5'>Students List</p>
                 <RegisterList    items={this.state.items}/> 
                 </span> :
                 <RegisterList    items={this.state.items}/>
                 
            }
            </div>
      )
    }
}
export default Register;