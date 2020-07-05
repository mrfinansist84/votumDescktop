import { convertDate } from "../../global/helpers";

export const buildProtocolDataStructure = (protocol, translater) => [
  {
    fieldName: translater.protocolsPage.dataStructure.status,
    value: protocol.status,
  },
  {
    fieldName: translater.protocolsPage.dataStructure.number,
    value: protocol.serialNumber,
  },
  {
    fieldName: translater.protocolsPage.dataStructure.createDate,
    value: convertDate(protocol.createDate),
  },
  {
    fieldName: translater.protocolsPage.dataStructure.voteDate,
    value: convertDate(protocol.voteDate),
  },
  {
    fieldName: translater.protocolsPage.dataStructure.result,
    value: protocol.result,
  },
  {
    fieldName: translater.protocolsPage.dataStructure.statistic,
    value: protocol.voteStatistic,
  },
];

export const filterSettingProtocol = (translater) => ({
  basic: [
    {
      value: "accepted",
      label: translater.protocolsPage.filterSettings.accepted,
    },
    {
      value: "rejected",
      label: translater.protocolsPage.filterSettings.rejected,
    },
    {
      value: "inDiscussion",
      label: translater.protocolsPage.filterSettings.inDiscussion,
    },
    {
      value: "all",
      label: translater.protocolsPage.filterSettings.all,
    },
  ],
  advanced: [
    {
      value: "title",
      label: translater.protocolsPage.filterSettings.title,
    },
    {
      value: "serialNumber",
      label: translater.protocolsPage.filterSettings.serialNumber,
    },
    {
      value: "createDate",
      label: translater.protocolsPage.filterSettings.createDate,
    },
  ],
});
