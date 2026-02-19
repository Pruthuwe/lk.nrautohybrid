import React, { useState } from 'react';

const BlogPost = ({ image, date, author, title, videoUrl, delay }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handlePlayVideo = () => {
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog" data-aos="fade-up" data-aos-delay={delay}>
          <div className="blog-image" style={{ position: 'relative', cursor: 'pointer' }} onClick={handlePlayVideo}>
            <img src={image} alt="Blog" />
            {videoUrl && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70px',
                height: '70px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '3px solid #28a745'
              }}
              className="play-button"
              >
                <i className="fas fa-play" style={{ 
                  color: '#28a745', 
                  fontSize: '24px',
                  marginLeft: '5px'
                }}></i>
              </div>
            )}
          </div>
          <div className="blog-content">
            <ul className="meta">
              <li><i className="far fa-calendar-alt"></i> {date}</li>
              <li><i className="far fa-user"></i> {author}</li>
            </ul>
            <h3 className="title" style={{ cursor: 'pointer' }} onClick={handlePlayVideo}>
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && videoUrl && (
        <>
          <div className="modal fade show d-block video-modal" tabIndex="-1" role="dialog" style={{zIndex: 1050}}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content" style={{ backgroundColor: '#000' }}>
                <div className="modal-header" style={{ borderBottom: 'none', padding: '10px' }}>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={closeModal}
                    aria-label="Close"
                    style={{ 
                      filter: 'invert(1)',
                      opacity: 1
                    }}
                  ></button>
                </div>
                <div className="modal-body p-0">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={videoUrl}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Video Player"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal} style={{zIndex: 1040}}></div>
          <style>{`
            .play-button:hover {
              transform: translate(-50%, -50%) scale(1.1);
              background-color: rgba(0, 0, 0, 0.9) !important;
              border-color: #28a745 !important;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default BlogPost;
