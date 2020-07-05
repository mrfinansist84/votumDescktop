import {
    CREATE_PROTOCOL_REQUEST
} from './constants';

export const createProtocolRequest = (protocol: any, userId: string) => ({
    type: CREATE_PROTOCOL_REQUEST,
    protocol,
    userId
} as const);

export type CreateProposalActions = 
  | ReturnType<typeof createProtocolRequest>;