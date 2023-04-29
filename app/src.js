const app = require('express')();
const os = require('os');

app.get('/', (req, res) => {
  res.send('Hello World from ' + os.hostname() + '!\n');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})