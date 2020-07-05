export interface CardProps {
  canVoteOnThisPage: boolean;
  userId: string;
  info: Document;
  defenition: string;
  votingAction: (cardId?: number, votingActionParam?: string, userId?: string) => void;
  openModalWithDetail: (info?: Document) => void
  canReadDetails: boolean;
};

interface Document {
  id: number;
  serialNumber?: string;
  title: string;
  link?: string;
  status?: string;
  createDate: number;
  voteDate?: number;
  total?: number;
  result?: string;
  agrees?: string[];
  against?: string[];
  abstained?: string[];
  tenantId?: number,
  login?: string,
  password?: string,
  flatNumber?: number,
  flatArea?: number,
  phoneNumber?: null | number,
  firstName?: string,
  lastName?: string,
  statusConnected?: boolean
};

export interface VotingButtonBoxProps {
  cardInfo: any;
  userId: string;
  votingAction: (
    cardId?: number,
    votingActionParam?: string,
    userId?: string,
    defenition?: string,
    filteredParams?: any,
    voteParams?: any,
  ) => void;
  isUserVoted: boolean;
  isAdmin: boolean;
  defenition: string;
};