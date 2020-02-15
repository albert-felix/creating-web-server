const unirest = require("unirest");

const networkPromise = () => {
  return new Promise((resolve,reject) => {
    unirest
      .get("https://albert.free.beeceptor.com")
      .then(resolve)
      .catch(reject);
  });
};

networkPromise()
  .then(data => { 
    console.log(data.body)
  });