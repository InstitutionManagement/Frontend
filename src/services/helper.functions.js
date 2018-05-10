
const UserValidator = () => {
  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    console.log('User Data in JSON is bad',e);
    localStorage.removeItem('user');
  }
  return user;
};

const Helper = {
    UserValidator
}

export default Helper;