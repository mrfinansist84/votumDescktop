import { dbFireStore } from "../../firebaseConfig";

class CreateProposalsPageService {
  createProposal = (proposal, userId) => {
    const date = Date.now();
    const proposalData = {
        id: date,
        title: proposal.title,
        text: proposal.text,
        author: userId, 
        createDate: date,
        agrees: [userId],
        against: [],
        abstained: [],
        status: 'voting'
    }
    try {
      dbFireStore.collection("proposals").doc(`${date}`).set(proposalData);
    } catch (error) {
      console.log(error);
    }
  };
}

export default new CreateProposalsPageService();
