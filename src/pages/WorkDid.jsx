import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import esfera_blanca from '../assets/esfera-blanca.svg';
import '../pages/workStyles.css';
import repuesto1antes from '../assets/repuesto1antes.png';
import repuesto1despues from '../assets/repuesto1despues.png';
import repuesto2antes from '../assets/repuesto2antes.jpg';
import repuesto2despues from '../assets/repuesto2despues.png';
import sushi1antes from '../assets/sushi1antes.jpg';
import sushi1despues from '../assets/sushi1despues.jpg';
import sushi2antes from '../assets/sushi2antes.jpg';
import sushi2despues from '../assets/sushi2despues.jpg';
import sushi3antes from '../assets/sushi3antes.jpg';
import sushi3despues from '../assets/sushi3despues.jpg';
import sushi4antes from '../assets/sushi4antes.jpg';
import sushi4despues from '../assets/sushi4despues.png';
import sushi5antes from '../assets/sushi5antes.jpg';
import sushi5despues from '../assets/sushi5despues.jpg';



/**

 * Reducir px de tarjeta azul.
 * Modificar el borde.
 * Josma debe dar instrucciones de modificacion.
 * agregar img antes y despues.
 * Proponle a Josma trabajar para trabajar para agenTech, que te ahga un plan en secciones y le vas pagando en secciones.
 */

// --- SVG Icons (Componentes en línea) --- 
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

// --- Componente Principal ---
const WorkDid = () => {
  // --- Estados para los sliders ---
  const [videoIndex, setVideoIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);
  const [createdImageIndex, setCreatedImageIndex] = useState(0);

  // --- Datos ---
  const placeholderImg = (text) => `https://placehold.co/600x400/17172C/E5E7EB?text=${text}`;
  const placeholderAvatar = (text) => `https://placehold.co/100x100/2563EB/FFFFFF?text=${text}`;

  const videos = [
    { id: 1, url: 'https://youtube.com/shorts/BqnIzjBK2Xg' },
    { id: 2, url: 'https://youtube.com/shorts/fRe1GQ9r2i0?feature=share' },
    { id: 3, url: 'https://youtube.com/shorts/JK0_GMgpnMw?feature=share' },
    { id: 4, url: 'https://youtube.com/shorts/NEzyycABln4?feature=share' },
    { id: 5, url: 'https://youtube.com/shorts/AAZjYRewS-I?feature=share' },
  ];
  
  const beforeAfterImages = [ { id: 1, before: repuesto1antes, after: repuesto1despues },
                              { id: 2, before: repuesto2antes, after: repuesto2despues },
                              { id: 2, before: sushi1antes, after: sushi1despues },
                              { id: 2, before: sushi2antes, after: sushi2despues },
                              { id: 2, before: sushi3antes, after: sushi3despues },
                              { id: 2, before: sushi4antes, after: sushi4despues },
                              { id: 2, before: sushi5antes, after: sushi5despues }
                            ];

  const socialMediaAccounts = [
    { id: 1, name: 'Marca Tech', description: 'Gestión completa de la comunidad y estrategia de contenido para una startup de tecnología.', url: '#', imageUrl: placeholderAvatar('MT') },
    { id: 2, name: 'Gastro Bar', description: 'Creación de contenido visual atractivo y campañas locales para aumentar la clientela.', url: '#', imageUrl: placeholderAvatar('GB') },
    { id: 3, name: 'Fit Life', description: 'Desarrollo de una comunidad fitness a través de contenido motivacional y educativo.', url: '#', imageUrl: placeholderAvatar('FL') },
  ];

  const createdImages = [
    { id: 1, title: 'Branding para Evento', imageUrl: placeholderImg('Evento X') },
    { id: 2, title: 'Campaña Publicitaria', imageUrl: placeholderImg('Oferta') },
    { id: 3, title: 'Infografía Educativa', imageUrl: placeholderImg('Datos') },
    { id: 4, title: 'Contenido para Redes', imageUrl: placeholderImg('Post') },
  ];
  
  const campaigns = [
    { title: 'Campaña de Lanzamiento', reach: '10K', beforeConversion: '1.8%', afterConversion: '4.7%' },
    { title: 'Refuerzo de Marca', reach: '25K', beforeConversion: '1.2%', afterConversion: '4.1%' },
    { title: 'Campaña Estacional', reach: '15K', beforeConversion: '2.1%', afterConversion: '5.2%' },
  ];

  // --- Funciones ---
  const getYoutubeEmbedUrl = (url) => {
    let videoId = '';
    const patterns = [
        /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
        /youtu\.be\/([a-zA-Z0-9_-]+)/,
        /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
        /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            videoId = match[1];
            break;
        }
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : '';
  };

  const handlePrev = (setter, length) => setter(prev => (prev - 1 + length) % length);
  const handleNext = (setter, length) => setter(prev => (prev + 1) % length);

  return (
    <div className="portfolio-body">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1>Proyectos realizados</h1>
          <p>así convierto ideas en contenido que genera resultados.</p>
        </header>

        <main className="portfolio-grid">
          {/* --- 1. Sección de Videos --- */}
          <section className="card glow-blue card-videos">
            <div className="card-header">
              <h2>Videos con estrategia</h2>
              <p>contenido  que conecta, atrae y convierte.</p>
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
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="nav-button prev" onClick={() => handlePrev(setVideoIndex, videos.length)}><ChevronLeftIcon /></button>
              <button className="nav-button next" onClick={() => handleNext(setVideoIndex, videos.length)}><ChevronRightIcon /></button>
              <div className="dots-container">
                {videos.map((_, idx) => <div key={idx} className={`dot ${videoIndex === idx ? 'active' : ''}`} onClick={() => setVideoIndex(idx)}></div>)}
              </div>
            </div>
          </section>

          {/* --- 2. Sección de Imágenes Creadas (NUEVA) --- */}
          <section className="card glow-orange card-created-images">
              <div className="card-header">
                  <h2>Diseños que comunican</h2>
                  <p>Contenido visual creado desde cero con propósito.</p>
              </div>
              <div className="carousel">
                  <div className="carousel-viewport">
                      <div className="carousel-track" style={{ transform: `translateX(-${createdImageIndex * 100}%)` }}>
                          {createdImages.map(img => (
                              <div key={img.id} className="carousel-item">
                                  <div className="created-image-item">
                                      <div className="created-image-wrapper">
                                          <img src={img.imageUrl} alt={img.title} />
                                      </div>
                                      <h3 className="created-image-title">{img.title}</h3>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <button className="nav-button prev" onClick={() => handlePrev(setCreatedImageIndex, createdImages.length)}><ChevronLeftIcon /></button>
                  <button className="nav-button next" onClick={() => handleNext(setCreatedImageIndex, createdImages.length)}><ChevronRightIcon /></button>
                  <div className="dots-container">
                      {createdImages.map((_, idx) => <div key={idx} className={`dot ${createdImageIndex === idx ? 'active' : ''}`} onClick={() => setCreatedImageIndex(idx)}></div>)}
                  </div>
              </div>
          </section>
          
          {/* --- 3. Sección Antes y Después --- */}
          <section className="card glow-blue card-images">
            <div className="card-header">
              <h2>Transformaciones Visuales</h2>
              <p>Antes y después que muestran el poder de un buen diseño con intención.</p>
            </div>
            <div className="carousel">
              <div className="carousel-viewport">
                <div className="carousel-track" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                  {beforeAfterImages.map(imgSet => (
                    <div key={imgSet.id} className="carousel-item">
                      <div className="before-after-container">
                        <div className="image-wrapper">
                          <img src={imgSet.before} alt="Imagen Antes" />
                          <span className="badge badge-antes">ANTES</span>
                        </div>
                        <div className="image-wrapper">
                          <img src={imgSet.after} alt="Imagen Después" />
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
                {beforeAfterImages.map((_, idx) => <div key={idx} className={`dot ${imageIndex === idx ? 'active' : ''}`} onClick={() => setImageIndex(idx)}></div>)}
              </div>
            </div>
          </section>
          
          {/* --- 4. Sección de Redes Sociales (NUEVA) --- 
          <section className="card glow-orange card-socials">
              <div className="card-header">
                  <h2>Gestión de Redes Sociales</h2>
                  <p>Marcas que han crecido con planificación, contenido y constancia.</p>
              </div>
              <div className="carousel">
                  <div className="carousel-viewport">
                      <div className="carousel-track" style={{ transform: `translateX(-${socialIndex * 100}%)` }}>
                          {socialMediaAccounts.map(account => (
                              <div key={account.id} className="carousel-item">
                                  <div className="social-item">
                                      <img src={account.imageUrl} alt={account.name} className="social-image" />
                                      <h3>{account.name}</h3>
                                      <p className="social-description">{account.description}</p>
                                      <a href={account.url} target="_blank" rel="noopener noreferrer" className="social-link">Visitar Perfil</a>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <button className="nav-button prev" onClick={() => handlePrev(setSocialIndex, socialMediaAccounts.length)}><ChevronLeftIcon /></button>
                  <button className="nav-button next" onClick={() => handleNext(setSocialIndex, socialMediaAccounts.length)}><ChevronRightIcon /></button>
                  <div className="dots-container">
                      {socialMediaAccounts.map((_, idx) => <div key={idx} className={`dot ${socialIndex === idx ? 'active' : ''}`} onClick={() => setSocialIndex(idx)}></div>)}
                  </div>
              </div>
          </section>*/}

          {/* --- 5. Sección de Campañas --- */}
          <section className="card glow-blue card-campaigns">
            <div className="card-header">
              <h2>Resultados reales </h2>
              <p>Estadísticas que hablan por sí solas</p>
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
          
          {/* --- 6. Sección CTA --- */}
          <section className="card glow-orange cta-container">
              <ZapIcon />
              <h2>Tu proyecto puede ser el próximo</h2>
              <p>Hablemos de tus ideas y hagámoslas crecer.</p>
              <button className="cta-button">¡COMENCEMOS A TRABAJAR!</button>
          </section>
        </main>
        
        {/* --- Botón de Retorno (NUEVO) --- */}
        <div className="back-button-container">
            <Link to="/" className="back-button">
                Volver al Inicio
            </Link>
        </div>

      </div>
    </div>
  );
};

export default WorkDid;

