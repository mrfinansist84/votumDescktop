import {
    CREATE_TENANTS_PROFILE_REQUEST,
} from './constants';

export const createTenantsProfileRequest = (profile: any, userId: string) => ({
    type: CREATE_TENANTS_PROFILE_REQUEST,
    profile,
    userId
} as const);

export type CreateProposalActions = 
  | ReturnType<typeof createTenantsProfileRequest>;