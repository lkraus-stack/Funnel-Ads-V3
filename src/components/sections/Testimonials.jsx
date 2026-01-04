/**
 * Testimonials Section Component
 * 
 * TEMPLATE GUIDE:
 * Testimonials-Carousel mit mehreren Kunden-Bewertungen.
 * Das große Featured-Zitat ist in einer separaten FeaturedQuote-Sektion.
 * 
 * Texte aus data/content.js (testimonialsContent)
 */
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Card from '../ui/Card';
import { testimonialsContent } from '../../data/content';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.section} id="results">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{testimonialsContent.title}</h2>
          <p className={styles.subtitle}>{testimonialsContent.subtitle}</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className={styles.carouselWrapper}>
          {/* Navigation Arrows */}
          <button
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={() => scroll('left')}
            aria-label="Vorherige"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carousel} ref={carouselRef}>
            {testimonialsContent.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="default" padding="md" hover={false} className={styles.testimonialCard}>
                  {/* Stars */}
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className={styles.testimonialQuote}>
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <span className={styles.testimonialName}>{testimonial.author}</span>
                      <span className={styles.testimonialRole}>
                        {testimonial.role} @ {testimonial.company}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={() => scroll('right')}
            aria-label="Nächste"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
