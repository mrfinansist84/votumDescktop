import React from 'react';

import BallotIcon from '@material-ui/icons/Ballot';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PanToolIcon from '@material-ui/icons/PanTool';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import {VotingPage} from '../containers/VotingPage';
import {ProtocolsPage} from '../containers/ProtocolsPage';
import {ProposalsPage} from '../containers/ProposalsPage';
import {CreateProposalsPage} from '../containers/CreateProposalsPage';
import {CreateProtocolsPage} from '../containers/CreateProtocolsPage';
import {CreateTenantProfile} from '../containers/CreateTenantProfile';
import { TenantsProfile } from '../containers/TenantsProfile';

import traslater from './translation.json';

export const routes = [
  {
    component: VotingPage,
    icon: <BallotIcon />,
    name: traslater.routes.votingPage.name,
    route: '/voting',
    title: traslater.routes.votingPage.title,
    label: traslater.routes.votingPage.label,
    isShowLabel: true,
  },
  {
    component: ProtocolsPage,
    icon: <LibraryBooksIcon />,
    name: traslater.routes.protocolsPage.name,
    route: '/protocols',
    title: traslater.routes.protocolsPage.title,
    label: traslater.routes.protocolsPage.label,
    isShowLabel: true,
  },
  {
    component: CreateProposalsPage,
    icon: <LibraryAddIcon />,
    name: traslater.routes.createProposalsPage.name,
    route: '/createProposal',
    title: traslater.routes.createProposalsPage.title,
    label: traslater.routes.createProposalsPage.label,
    isShowLabel: false,
  },
  {
    component: ProposalsPage,
    icon: <PanToolIcon />,
    name: traslater.routes.proposalsPage.name,
    route: '/proposals',
    title: traslater.routes.proposalsPage.title,
    label: traslater.routes.proposalsPage.label,
    isShowLabel: true,
  },
  {
    component: CreateProtocolsPage,
    icon: <NoteAddIcon />,
    name: traslater.routes.createProtocolsPage.name,
    route: '/createProtocols',
    title: traslater.routes.createProtocolsPage.title,
    label: traslater.routes.createProtocolsPage.label,
    isShowLabel: false,
  },
  {
    component: TenantsProfile,
    icon: <AccountBoxIcon />,
    name: traslater.routes.tenantsProfile.name,
    route: '/tenantsProfile',
    title: traslater.routes.tenantsProfile.title,
    label: traslater.routes.tenantsProfile.label,
    isShowLabel: true,
  },
  {
    component: CreateTenantProfile,
    icon: <GroupAddIcon />,
    name: traslater.routes.createTenantProfile.name,
    route: '/creatTenantsProfile',
    title: traslater.routes.createTenantProfile.title,
    label: traslater.routes.createTenantProfile.label,
    isShowLabel: false,
  },
];

export default routes;
