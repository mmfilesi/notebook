// TODO:
export const getAuth = (user, pwd) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      if (user === 'userValid' && pwd === 'pwdValid') {
        resolve(true);
      }
      resolve(false);
    }, 1000);
  });
}