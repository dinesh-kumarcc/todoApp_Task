import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export default function Signup() {
    const [user,setUser] = useState([{userName: '', Password: ''}]);

    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem('user')))
    },[])

    const handleSubmit = () =>{
      let items = [];
      let itemsData = JSON.parse(localStorage.getItem('user'));
      if(itemsData === null) {
          let obj = {};
          obj['id'] = Math.random(); 
          obj['name'] = user.userName;
          obj['password'] = user.Password;
          if(obj['password'] === undefined) {
              alert('Please enter password');
              return;
          }
          items.push(obj);
          localStorage.setItem('user', JSON.stringify(items));
      } 
      else {
          let names = itemsData.map(item => item.name.toLowerCase());
          if(names.indexOf(user.userName.toLowerCase()) >= 0) {
              alert('Name already exist!');
              return;
          }
          let obj = {};
          obj['id'] = Math.random();
          obj['name'] = user.userName;
          obj['password'] = user.Password; 
          if(obj['password'] === undefined) {
              alert('Please enter password');
              return;
          }
          itemsData.push(obj);
          localStorage.setItem('user', JSON.stringify(itemsData));
      }
        // localStorage.setItem('user',JSON.stringify(user));
    }
  return(
    <form>
      <label>
        <p>Username</p>
        <input type="text" placeholder="username" value={user.username} onChange={e => setUser({...user, userName: e.target.value})}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" placeholder="password" value={user.Password} onChange={e => setUser({...user, Password: e.target.value})}/>

      </label>
      <div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}