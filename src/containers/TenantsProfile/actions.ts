import {
    TENANTS_PROFILE_REQUEST,
    TENANTS_PROFILE_SUCCESS,
} from './constants';
//import { Profile } from './interface';

export const tenantsProfileRequest = () => ({
    type: TENANTS_PROFILE_REQUEST,
} as const);

export const tenantsProfileSuccess = (profiles: any) => ({
    type: TENANTS_PROFILE_SUCCESS,
    profiles
} as const);

export type TenantsActions = 
  | ReturnType<typeof tenantsProfileRequest>
  | ReturnType<typeof tenantsProfileSuccess>;