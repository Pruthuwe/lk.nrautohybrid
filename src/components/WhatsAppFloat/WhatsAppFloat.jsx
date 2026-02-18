import React, { useState, useEffect } from 'react';
import './WhatsAppFloat.css';

const WHATSAPP_NUMBER = '94713210583';
const STORAGE_KEY = 'whatsapp_popup_closed';

const WhatsAppFloat = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(() => {
    if (typeof sessionStorage === 'undefined') return true;
    return !sessionStorage.getItem(STORAGE_KEY);
  });
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const closePopup = () => {
    setWhatsappMessage('');
    setWhatsappOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // sessionStorage not available (e.g. private mode)
    }
  };

  const handleSendWhatsApp = () => {
    const text = whatsappMessage.trim() || 'Hello!';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    closePopup();
  };

  useEffect(() => {
    if (!whatsappOpen) return;
    const id = setTimeout(() => {
      document.addEventListener('click', close);
    }, 0);
    function close(e) {
      if (e.target.closest('.whatsapp-float-wrap')) return;
      closePopup();
    }
    return () => {
      clearTimeout(id);
      document.removeEventListener('click', close);
    };
  }, [whatsappOpen]);

  return (
    <div className="whatsapp-float-wrap">
      {whatsappOpen && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup-header">
            <div className="whatsapp-popup-header-left">
              <div className="whatsapp-popup-header-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="whatsapp-popup-header-text">
                <span className="whatsapp-popup-title">Support</span>
                <span className="whatsapp-popup-subtitle">Typically replies within an hour</span>
              </div>
            </div>
            <button
              type="button"
              className="whatsapp-popup-close"
              onClick={closePopup}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="whatsapp-popup-chat">
            <div className="whatsapp-popup-bubble">
              How can we help you?
            </div>
          </div>
          <div className="whatsapp-popup-footer">
            <input
              type="text"
              className="whatsapp-popup-input"
              placeholder="Type a message..."
              value={whatsappMessage}
              onChange={(e) => setWhatsappMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendWhatsApp()}
              autoComplete="off"
            />
            <button
              type="button"
              className="whatsapp-popup-send-btn"
              onClick={handleSendWhatsApp}
              aria-label="Send"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        className="whatsapp-float"
        onClick={() => setWhatsappOpen((open) => !open)}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
