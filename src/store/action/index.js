import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const CurrenUser = () => {
  let UserArray = [];
  return (dispatch) => {
    auth().onAuthStateChanged((e) => {
      if (e) {
        database()
          .ref('/')
          .child(`Create User/${e.uid}`)
          .once('value')
          .then((userData) => {
            UserArray.push(userData);
            let str = JSON.stringify(UserArray);
            let parse = JSON.parse(str);
            dispatch({type: 'profile', payload: parse});
          });
      }
    });
  };
};

const DonorListShow = () => {
  let DonorArrayList = [];
  return (dispatch) => {
    database()
      .ref('/')
      .child(`Create User/`)
      .on('child_added', (userData) => {
        DonorArrayList.push(userData);
        let str = JSON.stringify(DonorArrayList);
        let parse = JSON.parse(str);
        // console.log('DonorLisssssttt--->', parse);
        dispatch({type: 'DonorList', payload: parse})
      });
  };
};
export {CurrenUser, DonorListShow};
