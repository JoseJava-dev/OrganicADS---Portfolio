import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import esfera_blanca from '../assets/esfera-blanca.svg';
import '../pages/workStyles.css';

// --- SVG Icons ---
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cta-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

// Componente para convertir URL de YouTube a formato embed
const getYoutubeEmbedUrl = (url) => {
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1].split('?')[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : url;
};

const WorkDid = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // --- URLs de YouTube ---
  const videos = [
    { id: 1, url: 'https://youtu.be/4-6E8Hyf9t4?si=_wBYvu6c81lx3j9T' },
    { id: 2, url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw' },
    { id: 3, url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4' },
    { id: 4, url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' },
  ];

  // Mantengo la estructura para el carrusel, pero todas las imágenes usan `esfera_blanca`
  const beforeAfterImages = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  const campaigns = [
    { title: 'Campaña de Lanzamiento', reach: '10K', beforeConversion: '1.8%', afterConversion: '4.7%' },
    { title: 'Refuerzo de Marca', reach: '25K', beforeConversion: '1.2%', afterConversion: '4.1%' },
    { title: 'Campaña Estacional', reach: '15K', beforeConversion: '2.1%', afterConversion: '5.2%' },
  ];

  const handlePrev = (setter, length) => setter(prev => (prev - 1 + length) % length);
  const handleNext = (setter, length) => setter(prev => (prev + 1) % length);

  return (
    <>
      <div className="portfolio-body">
        <div className="portfolio-container">
          <header className="portfolio-header">
            <h1>PORTAFOLIO INTEGRAL</h1>
            <p>Historias de éxito, píxel a píxel.</p>
          </header>

          <main className="portfolio-grid">
            {/* --- 1. Sección de Videos --- */}
            <section className="card glow-blue card-videos">
              <div className="card-header">
                <h2>Videos que Inspiran</h2>
                <p>Historias que he contado en video para marcas</p>
              </div>
              <div className="carousel">
                <div className="carousel-viewport">
                  <div className="carousel-track" style={{ transform: `translateX(-${videoIndex * 100}%)` }}>
                    {videos.map(video => (
                      <div key={video.id} className="carousel-item">
                        <div className="video-player-wrapper">
                          <iframe
                            className="react-player"
                            src={getYoutubeEmbedUrl(video.url)}
                            title={`Video ${video.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              border: 'none',
                              borderRadius: '12px'
                            }}
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="nav-button prev" onClick={() => handlePrev(setVideoIndex, videos.length)}><ChevronLeftIcon /></button>
                <button className="nav-button next" onClick={() => handleNext(setVideoIndex, videos.length)}><ChevronRightIcon /></button>
                <div className="dots-container">
                  {videos.map((_, idx) => (
                    <div key={idx} className={`dot ${videoIndex === idx ? 'active' : ''}`} onClick={() => setVideoIndex(idx)}></div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- 2. Sección Antes y Después --- */}
            <section className="card glow-orange card-images">
              <div className="card-header">
                <h2>Transformaciones Visuales</h2>
                <p>Detalles que Hacen la Diferencia</p>
              </div>
              <div className="carousel">
                <div className="carousel-viewport">
                  <div className="carousel-track" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                    {beforeAfterImages.map(imgSet => (
                      <div key={imgSet.id} className="carousel-item">
                        <div className="before-after-container">
                          <div className="image-wrapper">
                            {/* Todas las imágenes usan esfera_blanca */}
                            <img src={esfera_blanca} alt="Imagen Antes (esfera blanca)" />
                            <span className="badge badge-antes">ANTES</span>
                          </div>
                          <div className="image-wrapper">
                            <img src={esfera_blanca} alt="Imagen Después (esfera blanca)" />
                            <span className="badge badge-despues">DESPUÉS</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="nav-button prev" onClick={() => handlePrev(setImageIndex, beforeAfterImages.length)}><ChevronLeftIcon /></button>
                <button className="nav-button next" onClick={() => handleNext(setImageIndex, beforeAfterImages.length)}><ChevronRightIcon /></button>
                <div className="dots-container">
                  {beforeAfterImages.map((_, idx) => (
                    <div key={idx} className={`dot ${imageIndex === idx ? 'active' : ''}`} onClick={() => setImageIndex(idx)}></div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- 3. Sección de Campañas --- */}
            <section className="card glow-blue card-campaigns">
              <div className="card-header">
                <h2>Estrategias con Resultados</h2>
                <p>Campañas que impulsan el crecimiento</p>
              </div>
              <div className="campaigns-grid">
                {campaigns.map((campaign, index) => (
                  <div key={index} className="campaign-item">
                    <h3>{campaign.title}</h3>
                    <div className="chart-container">
                      <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M0 30 C 20 35, 40 20, 60 25 S 80 5, 100 10" stroke="#4F46E5" fill="rgba(79, 70, 229, 0.2)" strokeWidth="1"/>
                      </svg>
                    </div>
                    <div className="stats-container">
                      <p>Alcance: {campaign.reach}</p>
                      <p>Conversión: <strong className="antes">{campaign.beforeConversion}</strong> → <strong className="despues">{campaign.afterConversion}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* --- 4. Sección CTA --- */}
          <footer className="cta-container">
            <ZapIcon />
            <h2>¿Tu Proyecto es el Próximo?</h2>
            <p>Hablemos de las metas que alcanzaremos juntos.</p>
            <button className="cta-button">¡COMENCEMOS A TRABAJAR!</button>
          </footer>

        </div>
      </div>
    </>
  );
};

export default WorkDid;
