export interface CreateProposalsPageProps {
  createProposalRequest: (
    proposalText: {
      title: string,
      text: string
    },
    userId: string
  ) => void;
};