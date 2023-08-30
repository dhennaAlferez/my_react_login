const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'your_username' && password === 'your_password') {
    res.json('Success');
  } else {
    res.json('Failed');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
