import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

// Need to use a proxy to forward to the designated port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})
