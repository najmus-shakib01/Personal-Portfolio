import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUndo } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { sendContactMessage } from './ContactApi'

const contactInfo = [
  {
    icon: <FaPhoneAlt size={18} />,
    label: 'Phone',
    value: '+880 1401 997130',
    href: 'tel:+8801401997130',
    color: 'var(--blue)',
    bg: '#eff6ff',
  },
  {
    icon: <FaEnvelope size={18} />,
    label: 'Email',
    value: 'syednazmusshakib94@gmail.com',
    href: 'mailto:syednazmusshakib94@gmail.com',
    color: '#dc2626',
    bg: '#fef2f2',
  },
  {
    icon: <MdLocationOn size={20} />,
    label: 'Location',
    value: 'Shayestaganj, Habiganj, Sylhet, Bangladesh',
    href: 'https://www.google.ca/maps/place/Notun+Bridge+Point,+Shaestagonj,+Hobigonj/@24.2687434,91.4714239,16.83z',
    color: '#059669',
    bg: '#ecfdf5',
  },
]

const INIT = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(INIT)
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      const result = await sendContactMessage(form)
      toast.success(result.message)
      setForm(INIT)
    } catch (err) {
      toast.error(err.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'var(--white)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="tag">Contact</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Get In <span>Touch</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: '#555',
              marginTop: '0.75rem',
              maxWidth: '480px',
            }}
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        {/* Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactInfo.map(info => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  border: 'var(--border)',
                  boxShadow: 'var(--shadow)',
                  background: 'var(--cream)',
                  textDecoration: 'none',
                  color: 'var(--black)',
                  transition: 'transform 0.12s ease, box-shadow 0.12s ease, background 0.12s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translate(-2px,-2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  e.currentTarget.style.background = info.bg
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                  e.currentTarget.style.background = 'var(--cream)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    background: info.color,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'var(--border)',
                    flexShrink: 0,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#888',
                      marginBottom: '4px',
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--black)',
                      wordBreak: 'break-all',
                    }}
                  >
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div
              style={{
                padding: '1rem 1.25rem',
                border: '2px solid var(--accent)',
                background: '#fefce8',
                boxShadow: '3px 3px 0 var(--accent-dark)',
                marginTop: '0.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--black)',
                  lineHeight: 1.7,
                }}
              >
                💬 I typically respond within <strong>24 hours</strong>. Feel free to send a
                message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              border: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
              background: 'var(--cream)',
              overflow: 'hidden',
            }}
          >
            {/* Form header */}
            <div
              style={{
                padding: '1rem 1.5rem',
                background: 'var(--black)',
                color: 'var(--white)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <FaPaperPlane size={12} />
              Send Me a Message
            </div>

            <form onSubmit={onSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { id: 'name', type: 'text', label: 'Your Name', placeholder: 'Enter your name' },
                { id: 'email', type: 'email', label: 'Your Email', placeholder: 'Enter your email' },
              ].map(field => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#444',
                      marginBottom: '6px',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={onChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      background: 'var(--white)',
                      border: 'var(--border)',
                      outline: 'none',
                      color: 'var(--black)',
                    }}
                    onFocus={e => e.target.style.boxShadow = 'var(--shadow-blue)'}
                    onBlur={e => e.target.style.boxShadow = 'none'}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#444',
                    marginBottom: '6px',
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={onChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    background: 'var(--white)',
                    border: 'var(--border)',
                    outline: 'none',
                    color: 'var(--black)',
                    resize: 'vertical',
                  }}
                  onFocus={e => e.target.style.boxShadow = 'var(--shadow-blue)'}
                  onBlur={e => e.target.style.boxShadow = 'none'}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: loading ? '#93c5fd' : 'var(--black)',
                    color: 'var(--white)',
                    border: 'var(--border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: 'var(--shadow)',
                    transition: 'transform 0.12s, box-shadow 0.12s',
                  }}
                >
                  <FaPaperPlane size={13} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={() => setForm(INIT)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '12px 18px',
                    background: 'transparent',
                    color: 'var(--black)',
                    border: 'var(--border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transition: 'background 0.12s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <FaUndo size={12} />
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact;