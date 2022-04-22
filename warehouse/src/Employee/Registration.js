import React, {useState} from 'react';
import './Registration.css';
import { useNavigate } from "react-router";
import axios from 'axios';
import FileBase64 from 'react-file-base64';

function Register() {
    const [form, setForm] = useState({
        name: "",
        phone:"",
        email:"",
        dob: "",
        gender: "",
        address: "",
        image: null
      });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

      function onFocus(e){
        e.currentTarget.type = "date";
    }
     function onBlur(e){
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "DOB";
    }

   const useSubmit = ((e) => {
        e.preventDefault();

        const url = "http://localhost:9000/acu/add";

        axios.post(url, form).then((response) => {
            setForm(response.data)
            window.alert("Registration Successfully Completed")
          })
          .catch(error => {
            window.alert(error);
            return(
              navigate('/signup')
            )
          });
          navigate('/login')
      })
  
  return (
    <div>
            <div class="user">
    <header class="user__header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS62IcIZ2FMGT5t_ChHaZ-LroDPN8xFnqU5M8z-F0WuSXrE9df2P4KMIIGLQOktb2oOFg&usqp=CAU" alt="" id="imgs"/>
        <h1 class="user__title"> Registration</h1>
    </header>
    <form class="form" onSubmit={useSubmit}>
        <div class="form__group">
        <input type="text" placeholder="NAME" id="name" class="form__input" value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })} required/>
        </div>
        <div class="form__group">
        <input type="contact" placeholder="PHONE" id="phone" class="form__input" value={form.phone}
           onChange={(e) => updateForm({ phone: e.target.value })} required/>
        </div>
        <div class="form__group">
        <input type="email" placeholder="EMAIL" id="email" class="form__input" value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })} required/>
        </div>
        <div class="form__group">
        <input type="password" placeholder="PASSWORD" id="password" class="form__input" value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })} required/>
        </div>

        <div class="form__group">
            <input type="date" onFocus={onFocus} onBlur={onBlur} class="form__input" id="dob" value={form.dob}
           onChange={(e) => updateForm({ dob: e.target.value })} required/>
        </div>
        <div class="form__group">
            <select class="form__input" id="gender" value={form.gender}
           onChange={(e) => updateForm({ gender: e.target.value })} required>
          <option>GENDER</option>
           <option>Male</option>
           <option>Female</option>
           <option>Other</option>
           </select>
        </div>
        <div class="form__group">
            <textarea rows={5} placeholder="ADDRESS" class="form__input" id="address" value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })} required/>
        </div>
        <div class="form__group up">  
        <FileBase64 type="file"  multiple={false} onDone={({ base64 }) => setForm({ ...form, image: base64 })} max-size="2000"/><br/>
        <label class="upd" required>Upload Your Aadhar Here</label>       
         </div>
         <div class="form__group  ok"><a href="/login" class="form__input">Already have a Account? Sign In</a></div>
        <button class="btn" type="submit">Register</button>
        
    </form>
    <br/><br/>
</div>
    </div>
  )
}

export default Register;