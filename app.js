// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello, this is a code by Ramanpreet to test pipeline and this is the second version');
//   });
//   const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`API server listening on port ${port}`);
// });

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000
const app = express()
app.use(express.static(path.join(__dirname+'/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'))
})
app.get('/home', (req, res) => {
  res.send('This is the home page')
})
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})


