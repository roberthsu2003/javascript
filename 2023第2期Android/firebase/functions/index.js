const {onRequest} = require("firebase-functions/v2/https");
exports.test = onRequest(
    {cors: true},
    (req, res) => {
      res.status(200).send("Hello! Robert");
    },
);
