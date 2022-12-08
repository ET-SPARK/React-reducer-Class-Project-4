import { combineReducers } from "redux";
import { Age, Fname, Lname, Mname, Profession } from "./reducer";

export const reducers = combineReducers({
    firstName: Fname,
    lastName: Lname,
    middleName: Mname,
    age: Age,
    profession: Profession,
})