import { React } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"

function App() {

  return (
    <div className="card" >
      <Avatar pic="pexels-james-wheeler-417074.jpg"/>
      <div className="data">
        <Intro  name="" description="Yoooooooooooooooooooooooooooooooooooo
        oooooooooooooooooo "/>
        <SkillList />
        
      </div>
    </div>
  );
  
}

function Avatar(props){
  return (
      <img className="avatar" src={props.pic} alt="avatar"/>
);
}

function Intro(props){
  return (
    <div  >
      <h1>{props.name}</h1>
      <p>{props.description}</p>  
    </div>
  );
}

function SkillList(){
  return (
    <ul className="skill-list">
      <Skill color="blue" name="html+CSS" emoji="	&#128511;"/>
      <Skill color="red" name="html+CSS" emoji="	&#128511;"/>
      <Skill color="yellow" name="html+CSS" emoji="	&#128511;"/>
      <Skill color="green" name="html+CSS" emoji="	&#128511;"/>

    </ul>
  )
}

function Skill(props){
  return (
    <div style={{backgroundColor : props.color}} className="skill">
     <span>{props.name}</span> 
     <span>{props.emoji} </span>  

    </div>
  )
}




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
