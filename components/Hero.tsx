// DynamicImageSlider.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function DynamicImageSlider({ query = 'healthcare' }) {
  type UnsplashImage = {
    id: string;
    urls: { regular: string };
    alt_description?: string;
  };

  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query, per_page: 10 },
          headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` }
        });
        setImages(res.data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query]);

  if (loading) return <p className="text-center">Loading images...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load images.</p>;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand' as const,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings} className="image-slider">
      {images.map((img) => (
        <div key={img.id}>
          <AnimatePresence>
            <motion.img
              key={img.id}
              src={img.urls.regular}
              alt={img.alt_description || ''}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full object-cover rounded-lg mx-auto"
            />
          </AnimatePresence>
        </div>
      ))}
    </Slider>
  );
}
