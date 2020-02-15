const fileSystemWrite = (text,completedCallback) => {
  setTimeout(() => {
    console.log("File is being written");
    console.log(text);
    completedCallback("success");
  });
};

const textToWrite = "Hello World";

fileSystemWrite(textToWrite,status => {
  console.log(`File write operation : ${status}!`);
});