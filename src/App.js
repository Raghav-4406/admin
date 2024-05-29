import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import UserForm from './Components/UserForm';
import RichTextEditor from './Components/RichTextEditor';

const App = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:50}}>
       <div style={{display:'flex',margin:10,marginBottom:100}}>
     <Counter />
     <RichTextEditor />
    </div>
    <UserForm />
   
    </div>
  );
};

export default App;
