export const checkIfTheUserVoted = (userId, card) => {
  const voteResults = [...card.agrees, ...card.against, ...card.abstained];
  return voteResults.some((id) => id === userId);
};

export const calcVoteResults = (cardInfo) => {
  const agreesAmount = cardInfo.agrees.length;
  const againstAmount = cardInfo.against.length;
  const abstainedAmount = cardInfo.abstained.length;
  const amountVotedTenants = agreesAmount + againstAmount + abstainedAmount;
  const quorum = cardInfo.totalVotePeopleNumber / 2 + 1;
  let result;

  switch (true) {
    case amountVotedTenants >= quorum && agreesAmount >= quorum:
      result = "accepted";
      break;
    case amountVotedTenants >= quorum && againstAmount >= quorum:
      result = "rejected";
      break;
    default:
      result = "hold";
  }

  return {
    result: result, 
    statistic: `ЗА: ${agreesAmount}/ ПРОТИВ: ${againstAmount}/ ВОЗДЕРЖАЛИСЬ: ${abstainedAmount}.
  Участвовало:${amountVotedTenants} из ${cardInfo.totalVotePeopleNumber}`};
};
