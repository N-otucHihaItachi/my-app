import { createContext, useState } from "react";
import CompB from "./CompB";

// create a Context to share `count` with children
const UserContext = createContext();

function CompA() {
  const [count, setCount] = useState(0);
  const[something,setSomething]=useState("");

  return (
    <>
      <h1>Component A</h1>
      <button onClick={handleClick}>Increment</button>

        <form>
            <label> Enter something
          <input type="text" placeholder="Enter something" name="something" value={something}onChange={handleChange}/>
            </label>
            <p>You entered: {something} </p>
        </form>
        
        <UserContext.Provider value={count}>
        <CompB />
      </UserContext.Provider>
    </>
  );
  function handleClick(){
    setCount(count+1);
}
function handleChange(event){
    setSomething(event.target.value);
    console.log(event.target.value);
}
}


export { UserContext };
export default CompA;