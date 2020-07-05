import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProposalsPageProps, Proposal } from './interface';
import PanToolIcon from "@material-ui/icons/PanTool";
import { limitString } from '../../global/helpers';
import Card from '../../components/Card';
import { calcDocumentAmount, openModalWithDetail } from '../MainPage/actions.js';
import { filteredProposalsRequest, votingProposalsAction } from './actions';
import Filter from '../../components/Filter';
import { buildProposalDataStructure, filterSettingProposals } from './helpers';
import './ProposalsPage.scss';
import translater from '../../global/translation.json';

export const ProposalsPage: React.FC<ProposalsPageProps> = props => {
  const { filteredProposalsRequest, filteredProposals, votingProposalsAction, calcDocumentAmount, openModalWithDetail } = props;
  const userId = '23';
const cardIcon = <PanToolIcon style={{ color: "#0076e4" }} fontSize="large" />;
  useEffect(() => {
    const documentsAmount = filteredProposals ? filteredProposals.length : 0;
    calcDocumentAmount(documentsAmount);
  }, [filteredProposals]);

  return (
    <div className="protocols-page-container">
      <Filter
        filterAction={filteredProposalsRequest}
        settings={filterSettingProposals(translater)}
        userId={userId}
      />

      <div className="protocols-page-content-container">
        {!filteredProposals.length && <div>{translater.proposalsPage.emptyContainerText}</div>}
        {filteredProposals.length !== 0 && (filteredProposals.map((filteredProposal: Proposal, i: number) => (
          <Card
            key={i}
            userId={userId}
            defenition={"proposals"}
            icon={cardIcon}
            title={limitString(filteredProposal.title, 50)}
            info={filteredProposal}
            votingAction={votingProposalsAction}
            canVoteOnThisPage={true}
            canReadDetails={true}
            openModalWithDetail={openModalWithDetail}
            dataStructure ={buildProposalDataStructure(filteredProposal, translater)}
          />
        )))}
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  filteredProposals: state.proposalsPageReducer.filteredProposals,
});

const mapDispatchToProps = {
  filteredProposalsRequest,
  votingProposalsAction,
  calcDocumentAmount,
  openModalWithDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(ProposalsPage);