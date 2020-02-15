const fileSystemWrite = text => {
  return new Promise((resolve,reject) => {
    console.log("File is being written");
    console.log(text);
    reject("Failed");
    resolve("Success");
  });
};

fileSystemWrite("My text")
.then(status => {
  console.log(`File write operation : ${status}!`);
})
.catch(error => {
  console.log(`Error happened : ${error}.`)
});