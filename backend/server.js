// Simple Express API placeholder for Musixone
import express from 'express';
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => res.json({status: 'ok'}));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on ${port}`));
