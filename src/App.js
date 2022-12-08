import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Age, name, Lname, Mname, Profession} from "./store/action/action";


function App() {
  const firstName  = useSelector((state) =>state.firstName);
  const lastName  = useSelector((state) => state.lastName);
  const middleName  = useSelector((state) => state.middleName);
  const age  = useSelector((state) => state.age);
  const profession  = useSelector((state) => state.profession);

  const dispatch = useDispatch();

  const [value , setValue] = useState()
  const [lValue, setLValue] = useState()
  const [mValue, setMValue] = useState()
  const [aValue, setLAValue] = useState()
  const [pValue, setPValue] = useState()
  return (
    <div>
    <input value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => dispatch(name(value))}>Dispatch</button>
    <p>FirstName: {firstName}</p>

    <input value={lValue} onChange={(e) => setLValue(e.target.value)}/>
    <button onClick={() => dispatch(Lname(lValue))}>Dispatch</button>
    <p>LastName: {lastName}</p>

    <input value={mValue} onChange={(e) => setMValue(e.target.value)}/>
    <button onClick={() => dispatch(Mname(mValue))}>Dispatch</button>
    <p>FirstName: {middleName}</p>

    <input value={aValue} onChange={(e) => setLAValue(e.target.value)}/>
    <button onClick={() => dispatch(Age(aValue))}>Dispatch</button>
    <p>LastName: {age}</p>

    <input value={pValue} onChange={(e) => setPValue(e.target.value)}/>
    <button onClick={() => dispatch(Profession(pValue))}>Dispatch</button>
    <p>LastName: {profession}</p>
    </div>
  );
}

export default App;
