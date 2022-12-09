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
    >FirstName: {middleName}</p>
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
    >LastName: {age}</p>
    </div>

    <div className="flex items-center border-b border-teal-500 py-2 my-10">
    <input  class="appearance-none bg-transparent border-none w-6/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Athletic" aria-label="Full name"
    value={pValue} onChange={(e) => setPValue(e.target.value)}/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded" type="button"
    onClick={() => dispatch(Profession(pValue))}>Dispatch</button>
    <p class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
    >LastName: {profession}</p> 
    </div>

    <div>
      {/* <ul>
        <li className="text-xl font-normal leading-normal mt-0 mb-2 text-pink-800"
        >The flow of data in a React-Redux application begins at the component level when the user interacts with the application UI. This interaction leads to the action creators dispatching an action.</li>
        <li className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800"
        >When an action is dispatched, it is received by the root reducer of the application and is passed on to all the reducers. Thus, it becomes the reducer’s task to determine if it needs to update the state based on the dispatched action.</li>
        <li className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800"
        >This is checked by using a simple switch statement to filter out the required actions. Each (smaller) reducer in the application accepts the dispatched action and if the type of the dispatched action matches, it returns a newly updated state.</li>
        <li className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800"
        >It is essential to note here that the state never actually changes in redux. Instead, the reducer always generates a new state which is a copy of the old state, but with some modifications.</li>
        <li className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800"
        >The store then informs the component about the new state which in turn retrieves the updated state and re-renders the component.</li>
        <li className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800"
        >Another important observation here is that flow of data in a React-Redux application is unidirectional, i.e., it only goes in one direction.</li>
      </ul> */}
    </div>


    </div>
  );
}

export default App;
