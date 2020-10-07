import React,{useState} from 'react';
import './App.css';

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [sentence,setSentence] = useState("")
  const [styling,setStyling] = useState({color:""})

 const handleMailInput = e =>setEmail(e.target.value);
 const handlePasswordInput = e =>setPassword(e.target.value);

 const handleSubmit = ()=>{
  email === "demo@myunisoft.fr" && password === "myunisoft"?setSentence(""):setSentence("Bad credentials");setStyling({color:"red"});
};

  return (
   <div>
       <h2 style={{textAlign:"center"}}>React.js technical test</h2>
       <div className="App flex column jc-center" >
           <div className="t-container flex jc-center">
                 <h1 className="title">
                  Connectez vous à MyUnisoft
                </h1>
          </div>
          <div className="container flex column jc-center">

                <p style={{color:"grey",fontSize:"12px"}}>Adresse email</p>

                <input className="input name" type="email" onChange={(e)=>handleMailInput(e)}></input>

                <p style={{color:"grey",fontSize:"12px"}}>Mot de passe<i class="fa fa-eye" aria-hidden="true"></i>

                </p>

               <input className="input pass" type="password"  onChange={(e)=>handlePasswordInput(e)}></input>
 
               <img src="..//iconfinder_Eye_4472995.png" alt="eye"/>

                <div className="excentre flex">
                      <a className="text" href="dhzddz">Mot de passe oublié ?</a>
                </div>

                <button className="btn" onClick={()=>{handleSubmit()}}>Se connecter</button>
                <p style = {styling}>{sentence}</p>

             </div>

         </div>
  </div>
  );
}

export default App;
