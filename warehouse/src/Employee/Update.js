import React, {useState, useEffect} from 'react';
import './Registration.css';
import { useParams, useNavigate } from "react-router";
import axios from 'axios';
import FileBase64 from 'react-file-base64';

export default function Update() {
    const [form, setForm] = useState({
        name: "",
        phone:"",
        email:"",
        dob: "",
        address: "",
        records: [],
      });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      axios.get(`http://localhost:9000/acu/${params.id.toString()}`).then((response) => {
        setForm(response.data)
     }).catch((err) => {
        console.log(err)
     })
    }, [params.id]);

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

      const onSubmit = (e) => {
        e.preventDefault();
        const editedPerson = {
          name: form.name,
          email: form.email,
          phone: form.phone,
          dob: form.dob,
          gender: form.gender,
          address: form.address,
        };
         axios.post(`http://localhost:9000/update/${params.id}`, editedPerson);
        window.alert("Updation Completed")
         navigate("/details");
      }
      function onFocus(e){
        e.currentTarget.type = "date";
    }
     function onBlur(e){
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "DOB";
    }

  
  
  return (
    <div>
            <div class="user">
    <header class="user__header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS62IcIZ2FMGT5t_ChHaZ-LroDPN8xFnqU5M8z-F0WuSXrE9df2P4KMIIGLQOktb2oOFg&usqp=CAU" alt="" id="imgs"/>
        <h1 class="user__title">Updation</h1>
    </header>
    <form class="form" onSubmit={onSubmit}>
        <div class="form__group">
        <input type="text" placeholder="NAME" id="name" class="form__input" value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}/>
        </div>
        <div class="form__group">
        <input type="contact" placeholder="PHONE" id="phone" class="form__input" value={form.phone}
           onChange={(e) => updateForm({ phone: e.target.value })}/>
        </div>
        <div class="form__group">
        <input type="email" placeholder="EMAIL" id="email" class="form__input" value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}/>
        </div>
        <div class="form__group">
            <input type="date" onFocus={onFocus} onBlur={onBlur} class="form__input" id="dob" value={form.dob}
           onChange={(e) => updateForm({ dob: e.target.value })}/>
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
           onChange={(e) => updateForm({ address: e.target.value })}/>
        </div>
        <div class="form__group up">  
        <FileBase64 type="file"  multiple={false} onDone={({ base64 }) => setForm({ ...form, image: base64 })} max-size="2000"/><br/>
        <label class="upd" required>Upload Your Aadhar Here</label>       
         </div>
        <button class="btn" type="submit">Update</button>
        {/* <Link className="btn btn-link" to={'/display'}>Register</Link> */}
    </form>
    <br/><br/>
</div>
    </div>
  )
}
