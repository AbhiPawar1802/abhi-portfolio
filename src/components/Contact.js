import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successAnim, setSuccessAnim] = useState(false);

  const primaryColor = darkMode ? '#54b689' : '#0d6efd';
  const errorColor = '#dc3545'; // Bootstrap red

  // Input focus & values for floating labels
  const [focusedInput, setFocusedInput] = useState({ name: false, email: false, message: false });
  const [inputValues, setInputValues] = useState({ name: '', email: '', message: '' });

  const validate = (data) => {
    const errors = {};
    if (!data.user_name.trim()) errors.user_name = 'Name is required';
    if (!data.user_email.trim()) {
      errors.user_email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.user_email)) {
      errors.user_email = 'Email is invalid';
    }
    if (!data.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors({});

    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
    };

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm('service_rt9mjrc', 'template_jvstd8d', form.current, 'L9FLE2i049Q_GJOlp')
      .then(() => {
        toast.success('Message sent successfully! 🎉');
        e.target.reset();
        setFormErrors({});
        setIsSubmitting(false);
        setInputValues({ name: '', email: '', message: '' });
        setSuccessAnim(true);
        setTimeout(() => setSuccessAnim(false), 2500);
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  // Floating label style helper
  const floatingLabel = (isFocusedOrFilled) => ({
    position: 'absolute',
    top: isFocusedOrFilled ? '-10px' : '14px',
    left: '12px',
    fontSize: isFocusedOrFilled ? '0.75rem' : '1rem',
    color: isFocusedOrFilled ? primaryColor : darkMode ? '#a0aec0' : '#6c757d',
    backgroundColor: darkMode ? '#283047' : '#ffffff',
    padding: '0 6px',
    pointerEvents: 'none',
    transition: 'all 0.25s ease-in-out',
    userSelect: 'none',
  });

  const inputStyle = {
    width: '100%',
    backgroundColor: darkMode ? '#0E141D' : '#ffffff',
    color: darkMode ? '#fff' : '#1f2937',
    borderRadius: '6px',
    padding: '14px 12px',
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none',
    border: `1.5px solid ${darkMode ? '#475569' : '#ced4da'}`,
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  const textareaStyle = { ...inputStyle, resize: 'vertical', minHeight: '120px' };

  // Handlers for input focus and value changes
  const handleFocus = (field) => setFocusedInput((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocusedInput((prev) => ({ ...prev, [field]: false }));
  const handleChange = (field, value) =>
    setInputValues((prev) => ({ ...prev, [field]: value }));

  const useFloatingLabel = (value, focused) => value || focused;

  // Card styling with fixed minHeight and flex to fill height
  const cardStyle = {
    backgroundColor: darkMode ? '#283047' : '#ffffff',
    borderRadius: '8px',
    boxShadow: darkMode
      ? '0 6px 18px rgba(0, 0, 0, 0.65)'
      : '0 6px 18px rgba(0, 0, 0, 0.1)',
    padding: '24px 28px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '300px',
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        backgroundColor: darkMode ? '#0E141D' : '#ffffff',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '0 16px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-5"
      >
        <h2
          className="fw-bold"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '2.8rem',
            color: darkMode ? '#fff' : '#000',
            position: 'relative',
            display: 'inline-block',
            paddingBottom: '8px',
          }}
        >
          Get in Touch
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '110px',
              height: '5px',
              backgroundColor: primaryColor,
              borderRadius: '3px',
            }}
          />
        </h2>
        <p
          style={{
            fontSize: '1.25rem',
            color: darkMode ? '#cbd5e1' : '#334155',
            marginTop: '8px',
          }}
        >
          Interested in working with me? Let's start a conversation!
        </p>
      </motion.div>

      {/* Bootstrap container + row for cards */}
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Contact Form Card */}
          <div className="col-12 col-md-5">
            <div className="card shadow" style={cardStyle} role="form" aria-label="Contact form">
              <form ref={form} onSubmit={sendEmail} noValidate style={{ height: '100%' }}>
                {/* Name input */}
                <div className="position-relative mb-4">
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder=" "
                    aria-required="true"
                    aria-invalid={formErrors.user_name ? 'true' : 'false'}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    onChange={(e) => handleChange('name', e.target.value)}
                    value={inputValues.name}
                    className="form-control"
                    style={{
                      ...inputStyle,
                      borderColor: formErrors.user_name ? errorColor : inputStyle.border,
                    }}
                  />
                  <label
                    htmlFor="user_name"
                    style={floatingLabel(useFloatingLabel(inputValues.name, focusedInput.name))}
                  >
                    Enter your name
                  </label>
                  {formErrors.user_name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-danger small mt-1"
                      role="alert"
                    >
                      {formErrors.user_name}
                    </motion.div>
                  )}
                </div>

                {/* Email input */}
                <div className="position-relative mb-4">
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder=" "
                    aria-required="true"
                    aria-invalid={formErrors.user_email ? 'true' : 'false'}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => handleChange('email', e.target.value)}
                    value={inputValues.email}
                    className="form-control"
                    inputMode="email"
                    autoComplete="email"
                    style={{
                      ...inputStyle,
                      borderColor: formErrors.user_email ? errorColor : inputStyle.border,
                    }}
                  />
                  <label
                    htmlFor="user_email"
                    style={floatingLabel(useFloatingLabel(inputValues.email, focusedInput.email))}
                  >
                    Enter your email
                  </label>
                  {formErrors.user_email && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-danger small mt-1"
                      role="alert"
                    >
                      {formErrors.user_email}
                    </motion.div>
                  )}
                </div>

                {/* Message textarea */}
                <div className="position-relative mb-4" style={{ flexGrow: 1 }}>
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    aria-required="true"
                    aria-invalid={formErrors.message ? 'true' : 'false'}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    onChange={(e) => handleChange('message', e.target.value)}
                    value={inputValues.message}
                    className="form-control"
                    rows={5}
                    style={{
                      ...textareaStyle,
                      borderColor: formErrors.message ? errorColor : inputStyle.border,
                      height: '100%',
                      minHeight: '80px',
                    }}
                  />
                  <label
                    htmlFor="message"
                    style={floatingLabel(useFloatingLabel(inputValues.message, focusedInput.message))}
                  >
                    Write your message here...
                  </label>
                  {formErrors.message && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-danger small mt-1"
                      role="alert"
                    >
                      {formErrors.message}
                    </motion.div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid mb-3">
                  <motion.button
                    whileHover={{ scale: 1.06, boxShadow: `0 0 8px ${primaryColor}` }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="btn fw-bold"
                    style={{
                      backgroundColor: primaryColor,
                      color: 'white',
                      padding: '0.65rem 0',
                      borderRadius: '8px',
                      fontSize: '1.15rem',
                      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      boxShadow: `0 4px 15px ${primaryColor}66`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                    aria-label="Send message"
                  >
                    {/* Paper plane icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </motion.button>
                </div>

                {/* Success Animation */}
                <AnimatePresence>
                  {successAnim && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center"
                      style={{
                        marginTop: '16px',
                        color: primaryColor,
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        userSelect: 'none',
                      }}
                      role="alert"
                      aria-live="polite"
                    >
                      {/* Checkmark icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke={primaryColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Message sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Reach Me At Card */}
          <div className="col-12 col-md-5">
            <div className="card shadow" style={cardStyle} aria-label="Contact information">
              <h3
                className="fw-bold mb-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '1.9rem',
                  color: darkMode ? '#fff' : '#000',
                  textAlign: 'left',
                }}
              >
                Reach Me At
              </h3>

              <div
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                  color: darkMode ? '#e0e7ff' : '#1e293b',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                {/* Email */}
                <a
                  href="mailto:pabhi3195@gmail.com"
                  style={{
                    color: primaryColor,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                  }}
                  aria-label="Send email to pabhi3195@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => (e.currentTarget.style.color = darkMode ? '#81c995' : '#084298')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = primaryColor)}
                >
                  <FiMail aria-hidden="true" size={22} />
                  pabhi3195@gmail.com
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/abhi-pawar-058775226"
                  style={{
                    color: primaryColor,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                  }}
                  aria-label="Visit LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => (e.currentTarget.style.color = darkMode ? '#81c995' : '#084298')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = primaryColor)}
                >
                  <FiLinkedin aria-hidden="true" size={22} />
                  linkedin.com/in/abhi-pawar-058775226
                </a>
              </div>

              {/* Info Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  marginTop: '28px',
                  padding: '18px 22px',
                  borderRadius: '8px',
                  backgroundColor: darkMode ? '#394661' : '#f1f5f9',
                  color: darkMode ? '#d1d5db' : '#334155',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  boxShadow: darkMode
                    ? '0 4px 12px rgba(0,0,0,0.3)'
                    : '0 4px 12px rgba(0,0,0,0.1)',
                  userSelect: 'none',
                  flexGrow: 1,
                }}
              >
                <p style={{ margin: 0 }}>
                  Feel free to reach out via email or LinkedIn — I’m always open to new
                  opportunities and collaborations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? 'dark' : 'light'}
      />
    </section>
  );
};

export default Contact;
