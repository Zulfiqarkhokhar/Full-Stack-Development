import Clock from "./Clock";
import MyButton from "./MyButton";
import MyComponent from "./MyComponent";
import StateComponent from "./StateComponent";
import UseEffectHook from "./UseEffectHook";

function App(){
  return <div>
    <h1>This is React Practise Project</h1>
    <MyButton/>
    <MyComponent/>
    <StateComponent/>
    <UseEffectHook/>

    <Clock/>
  </div>
}

export default App;