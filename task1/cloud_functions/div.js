const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  const X = req.body.X;
  const Y = req.body.Y;
  const Result = X / Y;
  const response = {X: X, Y: Y, Result: Result};
  res.status(200).json(response);
});