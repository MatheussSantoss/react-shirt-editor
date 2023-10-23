import express from "express";
import * as dotenv from "dotenv";
const deepai = require('deepai');

dotenv.config();
deepai.setApiKey(process.env.DEEPAI_API_KEY);
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'OK' });
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await deepai.callStandardApi("logo-generator", {
      grid_size: '1',
      text: prompt,
    });
    res.status(200).json(response.output_url);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'An error occured during the request' });
  }
})

export default router;