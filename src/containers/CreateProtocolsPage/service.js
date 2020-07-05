import { dbFireStore } from "../../firebaseConfig";
import * as firebase from "firebase/app";

class CreateProtocolPageService {
  createProtocol = (protocol, link, userId, totalAmountTenants) => {
    const date = Date.now();
    const protocolData = {
      id: date,
      author: userId,
      totalVotePeopleNumber: totalAmountTenants,
      result: protocol.status === 'voting' ? 'inProcess' : 'inDiscussion' ,
      link: link,
      agrees: [],
      against: [],
      abstained: [],
      serialNumber: protocol.serialNumber,
      status: protocol.status,
      title: protocol.title,
      voteDate: typeof protocol.voteDate !== "number" ? Date.parse(protocol.voteDate) : protocol.voteDate,
      createDate: typeof protocol.createDate !== "number" ? Date.parse(protocol.createDate) : protocol.createDate,
      voteStatistic: ''
    };
    try {
      dbFireStore.collection("protocols").doc(`${date}`).set(protocolData);
    } catch (error) {
      console.log(error);
    }
  };
  sendProtocolToFireStore = async (file) => {
    const metadata = {
      contentType: "application/pdf",
    };
    const storageRef = firebase.storage().ref();
    const link = await storageRef
      .child("application/" + file.name)
      .put(file, metadata)
      .then((UploadTaskSnapshot) =>
        UploadTaskSnapshot.ref.getDownloadURL().then(function (downloadURL) {
          return downloadURL;
        })
      );
    return link;
  };

  getTenantsTotalAmount = () => {
    return dbFireStore
      .collection("tenants")
      .get()
      .then((doc) => {
        const allSuitableDocs = [];
        doc.forEach((doc) => allSuitableDocs.push(doc.data()));
        return allSuitableDocs.length;
      });
  };
}

export default new CreateProtocolPageService();
