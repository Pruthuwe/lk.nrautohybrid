import React, { useState, useEffect, useRef, useCallback } from 'react';
import './WhatsAppFloat.css';

const WHATSAPP_NUMBER = '94772166306';
const POPUP_SHOW_INTERVAL_MS = 60 * 1000;   // appear every 1 minute
const POPUP_STAY_DURATION_MS = 10 * 1000;   // stay 10 seconds then hide (unless typing)
const TYPING_NO_SEND_TIMEOUT_MS = 2 * 60 * 1000; // if typing but don't send within 3 min: clear input & close
const POPUP_HIDE_ANIMATION_MS = 280;

const WhatsAppFloat = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(true);
  const [whatsappClosing, setWhatsappClosing] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const hideAfter10sRef = useRef(null);
  const noSendWithin3minRef = useRef(null);

  const requestClose = useCallback(() => {
    setWhatsappOpen(false);
    setWhatsappClosing(true);
  }, []);

  useEffect(() => {
    if (!whatsappClosing) return;
    const id = setTimeout(() => setWhatsappClosing(false), POPUP_HIDE_ANIMATION_MS);
    return () => clearTimeout(id);
  }, [whatsappClosing]);

  const clearTimers = useCallback(() => {
    if (hideAfter10sRef.current) {
      clearTimeout(hideAfter10sRef.current);
      hideAfter10sRef.current = null;
    }
    if (noSendWithin3minRef.current) {
      clearTimeout(noSendWithin3minRef.current);
      noSendWithin3minRef.current = null;
    }
  }, []);

  const closePopup = useCallback(() => {
    clearTimers();
    setWhatsappMessage('');
    requestClose();
  }, [clearTimers, requestClose]);

  // Cycle: show popup every 1 minute
  useEffect(() => {
    const showIntervalId = setInterval(() => setWhatsappOpen(true), POPUP_SHOW_INTERVAL_MS);
    return () => clearInterval(showIntervalId);
  }, []);

  // When popup opens: start 10s auto-hide (unless user is typing – see input handlers)
  useEffect(() => {
    if (!whatsappOpen) return;
    clearTimers();
    hideAfter10sRef.current = setTimeout(() => {
      hideAfter10sRef.current = null;
      setWhatsappMessage('');
      requestClose();
    }, POPUP_STAY_DURATION_MS);
    return () => clearTimers();
  }, [whatsappOpen, clearTimers, requestClose]);

  // When user focuses or types in input: cancel 10s hide, start/reset 3min "no send" timer
  const onInputInteraction = () => {
    if (hideAfter10sRef.current) {
      clearTimeout(hideAfter10sRef.current);
      hideAfter10sRef.current = null;
    }
    if (noSendWithin3minRef.current) clearTimeout(noSendWithin3minRef.current);
    noSendWithin3minRef.current = setTimeout(() => {
      noSendWithin3minRef.current = null;
      setWhatsappMessage('');
      requestClose();
    }, TYPING_NO_SEND_TIMEOUT_MS);
  };

  const handleSendWhatsApp = () => {
    clearTimers();
    const text = whatsappMessage.trim() || 'Hello!';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setWhatsappMessage('');
    requestClose();
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
  }, [whatsappOpen, closePopup]);

  const showPopup = whatsappOpen || whatsappClosing;

  return (
    <div className="whatsapp-float-wrap">
      {showPopup && (
        <div className={`whatsapp-popup${whatsappClosing ? ' whatsapp-popup--closing' : ''}`}>
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
              onChange={(e) => {
                setWhatsappMessage(e.target.value);
                onInputInteraction();
              }}
              onFocus={onInputInteraction}
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
        onClick={() => { if (whatsappOpen || whatsappClosing) closePopup(); else setWhatsappOpen(true); }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
