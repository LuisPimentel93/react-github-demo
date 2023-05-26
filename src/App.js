import Display from "./Components/Display";
import Input from "./Components/Input"
import { useState} from "react"
// import Display from "./Components/Display";
function App() {
  const [userData, setUserData] = useState(undefined)

  const display = userData && <Display userData={userData}/>
  
 return(
    <div>
      <Input setUserData={setUserData}/>
      {display}

    </div>
 );
}
export default App;


 // usename name is state
//  user is state