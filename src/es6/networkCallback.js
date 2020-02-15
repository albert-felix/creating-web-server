var https = require("follow-redirects").https;
var fs = require("fs");

var options = {
  method: "GET",
  hostname: "albert.free.beeceptor.com",
  path: "/",
  headers: {},
  maxRedirects: 20
};

const networkRequest = (
  successCallback = () => null,
  failureCallback = () => null
) => {
  var req = https.request(options, function(res) {
    var chunks = [];

    res.on("data", function(chunk) {
      chunks.push(chunk);
    });

    res.on("end", function(chunk) {
      var body = Buffer.concat(chunks);
      successCallback(body.toString());
    });

    res.on("error", function(error) {
      failureCallback(error);
    });
  });

  req.end();
};

networkRequest(data)
