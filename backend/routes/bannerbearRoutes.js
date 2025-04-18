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
        "template": "V4WN6JDx3vX253Gqjk",
        "modifications": [
          {
            "name": "background",
            "color": null
          },
          {
            "name": "image_container1",
            "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
          },
          {
            "name": "image_container2",
            "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
          },
          {
            "name": "image_container3",
            "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
          },
          {
            "name": "logo_container",
            "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
          },
          {
            "name": "border",
            "color": null
          },
          {
            "name": "rectangle",
            "color": null
          },
          {
            "name": "price",
            "text": "You can change this text",
            "color": null,
            "background": null
          },
          {
            "name": "title",
            "text": "You can change this text",
            "color": null,
            "background": null
          },
          {
            "name": "bedroom",
            "text": "You can change this text",
            "color": null,
            "background": null
          },
          {
            "name": "bathroom",
            "text": "You can change this text",
            "color": null,
            "background": null
          },
          {
            "name": "area",
            "text": "You can change this text",
            "color": null,
            "background": null
          },
          {
            "name": "overview",
            "text": "You can change this text",
            "color": null,
            "background": null
          }
        ],
        "webhook_url": null,
        "transparent": false,
        "metadata": null
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
