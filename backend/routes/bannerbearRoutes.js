import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const API_KEY = process.env.BANNERBEAR_API_KEY;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

// Generate Image
router.post('/generate-image', async (req, res) => {
  const { headline, subtext, imageUrl } = req.body;

  try {
    const response = await axios.post(
      'https://api.bannerbear.com/v2/images',
      {
        template: TEMPLATE_ID,
        modifications: [
          { name: 'headline', text: headline },
          { name: 'subtext', text: subtext },
          { name: 'image', image_url: imageUrl }
        ]
      },
      {
        headers: { Authorization: `Bearer ${API_KEY}` }
      }
    );

    res.status(200).json({ imageUrl: response.data.image_url });
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

export default router;
