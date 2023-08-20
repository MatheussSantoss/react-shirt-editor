import express from 'express';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes);

export { app };