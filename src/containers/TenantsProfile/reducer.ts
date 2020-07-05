import {
    TENANTS_PROFILE_SUCCESS
} from './constants';
import { TenantsActions } from './actions';
//import { Profile } from './interface';

const initialState = {
    profiles: [] as [] | any[],
};
export type IReduxState = typeof initialState;

const reducer = (state: IReduxState = initialState, action: TenantsActions): IReduxState => {
    switch (action.type) {
       
        case TENANTS_PROFILE_SUCCESS: 
            return {
                ...state,
                profiles: action.profiles ? action.profiles : [],
            };
        default:
            return state
    }
};

export { initialState, reducer };

export default reducer;