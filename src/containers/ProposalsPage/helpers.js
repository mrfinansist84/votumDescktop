import { limitString, convertDate } from "../../global/helpers";

export const buildProposalDataStructure = (proposal, translater) => [
  {
    fieldName: translater.proposalsPage.dataStructure.createDate,
    value: convertDate(proposal.createDate),
  },
  {
    fieldName: translater.proposalsPage.dataStructure.text,
    value: limitString(proposal.text, 45),
  },
];

export const filterSettingProposals = (translater) => ({
  basic: [
    {
      value: "anotherTenantProposals",
      label: translater.proposalsPage.filterSettings.anotherTenantProposals,
    },
    {
      value: "myProposals",
      label: translater.proposalsPage.filterSettings.myProposals,
    },
    {
      value: "all",
      label: translater.proposalsPage.filterSettings.all,
    },
  ],
  advanced: [
    {
      value: "title",
      label: translater.proposalsPage.filterSettings.title,
    },
    {
      value: "serialNumber",
      label: translater.proposalsPage.filterSettings.serialNumber,
    },
    {
      value: "createDate",
      label: translater.proposalsPage.filterSettings.createDate,
    },
  ],
});
