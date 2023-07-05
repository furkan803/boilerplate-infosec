const express = require('express');
const app = express();

const helmet = require('helmet');


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`useful programmer info security app started on port ${PORT}`);
});