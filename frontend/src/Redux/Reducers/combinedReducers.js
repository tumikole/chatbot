import { combineReducers } from 'redux'
import getMessage from './userReducer'



  

 const allReducers = combineReducers({
    getIntroMessage: getMessage

})

export default allReducers