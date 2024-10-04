const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200        
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
  console.log('Received a GET request from the frontend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
