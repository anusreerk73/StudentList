import React , {Component} from 'react';
import '../Style.scss';
class Home extends Component {
    constructor(props){
       super(props);
       this.state = {
           fields: {},
           errors: {}
       }
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields["password"]){
           formIsValid = false;
           errors["password"] = "Cannot be empty";
        }
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
   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           window.location.href = "/register"
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
            <div className='login container-fluid'>           
               <form onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="col-md-5 container login_section">
                        <h3>Login Your Account</h3>
                      <fieldset>
                         <div>
                            <div>Email</div>
                            <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                            <div style={{color: "red"}}>{this.state.errors["email"]}</div>  
                         </div>
                         <div>
                             <div>Password</div>
                            <input refs="password" type="password" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                            <div style={{color: "red"}}>{this.state.errors["password"]}</div>  
                         </div>
                     </fieldset>
                     <button className='loginBtn mt-3' type='submit'>Login</button>
                  </div>
              </form>
            </div>
      )
    }
}
export default Home;