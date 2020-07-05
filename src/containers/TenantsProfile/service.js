import firebase from 'firebase';
import {
    dbFireStore
} from '../../firebaseConfig';

class TenantsProfileService {
    getTenantsProfile = () => {
        try {
            return dbFireStore.collection('tenants')
                .get()
                .then(doc => {
                    const allSuitableDocs = [];
                    doc.forEach(doc => allSuitableDocs.push(doc.data()));
                    return allSuitableDocs;
                });
        } catch (error) {
            console.log(error)
        };
    };
};

export default new TenantsProfileService();