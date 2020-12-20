
import {TUserType} from '../../common.types';

export const userReducer=(state:TUserType,action:{type:string;user:{}})=>{
    switch (action.type) {
        case "USER_LOGIN":
            
            return{
                ...state,
                ...action.user
            }
    
        default:
           return state;
    }
}