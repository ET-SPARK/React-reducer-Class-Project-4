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
    <div className="flex items-center border-b border-teal-500 my-10 py-2"> 
    <input  class="appearance-none bg-transparent border-none w-6/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Antoni " aria-label="Full name"
    value={value} onChange={(e) => setValue(e.target.value)}/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded" type="button"
    onClick={() => dispatch(name(value))}>Dispatch</button>
    <p class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
    >FirstName: {firstName}</p>
    </div>

    <div className="flex items-center border-b border-teal-500 py-2 my-10">
    <input  class="appearance-none bg-transparent border-none w-6/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Keven" aria-label="Full name"
    value={mValue} onChange={(e) => setMValue(e.target.value)}/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded" type="button"
    onClick={() => dispatch(Mname(mValue))}>Dispatch</button>
    <p class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
    >MiddleName: {middleName}</p>
    </div>


    <div className="flex items-center border-b border-teal-500 py-2 my-10">
    <input  class="appearance-none bg-transparent border-none w-6/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ronaldo" aria-label="Full name"
    value={lValue} onChange={(e) => setLValue(e.target.value)}/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded" type="button"
     onClick={() => dispatch(Lname(lValue))}>Dispatch</button>
    <p class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
    >LastName: {lastName}</p>
    </div>


    <div className="flex items-center border-b border-teal-500 py-2 my-10">
    <input  class="appearance-none bg-transparent border-none w-6/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="20" aria-label="Full name"
    value={aValue} onChange={(e) => setLAValue(e.target.value)}/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded" type="button"
    onClick={() => dispatch(Age(aValue))}>Dispatch</button>
    <p class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
    >Age: {age}</p>
    </div>

    <div className="flex items-center border-b border-teal-500 py-2 my-10">
    <input  class="appearance-none bg-transparent border-none w-6/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Athletic" aria-label="Full name"
    value={pValue} onChange={(e) => setPValue(e.target.value)}/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded" type="button"
    onClick={() => dispatch(Profession(pValue))}>Dispatch</button>
    <p class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
    >Profession: {profession}</p> 
    </div>




    </div>
  );
}

export default App;
