import { dbFireStore } from "../../firebaseConfig";

class CreateTenantsProfileService {
  createProfile = (profile) => {
    const date = Date.now();
    const profileData = {
        ...profile,
      id: date,
      login: '',
      password: '',
      status: ''
    };
    try {
      dbFireStore.collection("tenants").doc(`${date}`).set(profileData);
    } catch (error) {
      console.log(error);
    }
  };
}

export default new CreateTenantsProfileService();
