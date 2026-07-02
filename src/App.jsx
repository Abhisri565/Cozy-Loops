import { MagneticButton } from './components/ui/magnetic-button'
import { CanvasText } from './components/ui/canvas-text'
import './App.css'

function App() {
  // 4 Main product categories
  const categories = [
    { id: 1, name: "Keychains", quote: "Miniature loops of art designed for daily travel." },
    { id: 2, name: "Plushie Toys", quote: "Soft, squeezable characters made with premium wool." },
    { id: 3, name: "Crochet Toys", quote: "Handcrafted structural companions for all ages." },
    { id: 4, name: "Gifts", quote: "Curated luxury crochet boxes for your special moments." }
  ];

  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <header style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(242, 238, 229, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(17, 17, 16, 0.5)'
      }}>
        <div className="container" style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '16px var(--spacing-md)',
          width: '100%'
        }}>
          {/* Left Side: Logo and Name (Links to Home) */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', transition: 'opacity var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.opacity = 0.8} onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
            <img src="/logo.png" alt="Cozy Loops Logo" style={{ height: '32px', width: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className="text-label" style={{ fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.12em', color: 'var(--color-primary)' }}>
              Cozy Loops
            </div>
          </a>

          {/* Right Side: Links in exact requested order */}
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#home" className="text-label" style={{ color: 'var(--color-primary)', fontSize: '0.7rem' }}>Home</a>
            <a href="#about" className="text-label" style={{ color: 'var(--color-primary)', fontSize: '0.7rem' }}>About</a>
            <a href="#products" className="text-label" style={{ color: 'var(--color-primary)', fontSize: '0.7rem' }}>Products</a>
            <a href="#contact" className="text-label" style={{ color: 'var(--color-primary)', fontSize: '0.7rem' }}>Contact Me</a>
          </nav>
        </div>
      </header>

      {/* Hero (Home) Section - Floating side-by-side layout inspired by modern design */}
      <main id="home" className="container animate-fade-in" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 1fr', 
        gap: '48px',
        alignItems: 'center',
        padding: '80px var(--spacing-md) 100px var(--spacing-md)',
        minHeight: 'calc(100vh - 80px)'
      }}>
        {/* Left Side: Badge, Heading, Quote, and side-by-side Buttons (No background card) */}
        <div className="hero-left">
          {/* Capsule Badge */}
          <div className="badge">
            <div className="badge-dot"></div>
            <span className="badge-text">Handmade with Love</span>
          </div>
          
          {/* Bold Display Brand Heading with Canvas Animated Yarn Loops */}
          <h1 className="text-display" style={{ 
            width: '100%',
            marginBottom: '24px', 
            textTransform: 'uppercase',
            letterSpacing: '0.01em'
          }}>
            <CanvasText 
              text="Cozy Loops" 
              colors={['#FFD700', '#F2EEE5', '#D4AF37', '#CD7F32', '#FFF8DC']} 
              lineGap={6} 
              animationDuration={25} 
            />
          </h1>
          
          {/* Elegant Quotation Paragraph */}
          <p className="text-body" style={{ 
            fontSize: '0.92rem', 
            lineHeight: '1.8', 
            color: 'var(--color-secondary)', 
            marginBottom: '40px',
            maxWidth: '520px',
            borderLeft: '2px solid var(--color-tertiary)',
            paddingLeft: '16px'
          }}>
            "Where thread meets thought, and patience becomes form. Each loop is a deliberate choice, weaving texture and space into structural stories of comfort."
          </p>
          
          {/* Side-by-Side Call to Action Buttons with Magnetic Effect */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <MagneticButton>
              <a href="#products" className="btn-primary" style={{ padding: '14px 28px', display: 'inline-block' }}>
                Explore Gallery
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-secondary" style={{ padding: '14px 28px', display: 'inline-block' }}>
                Contact Me
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Side: Arched Image with Animated Arched Orbit Path (No background card) */}
        <div className="hero-right">
          <div className="orbit-container">
            {/* Arched path matching the image shape, with a glowing gold dot animating along it */}
            <svg viewBox="0 0 300 360" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 5
            }}>
              {/* Thin gold arched outline path with 20px spacing gap */}
              <path 
                d="M 5 355 L 5 150 A 145 145 0 0 1 295 150 L 295 355 Z" 
                fill="none" 
                stroke="rgba(197, 160, 89, 0.2)" 
                strokeWidth="1.5" 
              />
              
              {/* Glowing gold dot animating along the path */}
              <circle r="5" fill="var(--color-tertiary)" style={{ filter: 'drop-shadow(0 0 6px var(--color-tertiary))' }}>
                <animateMotion 
                  dur="15s" 
                  repeatCount="indefinite" 
                  path="M 5 355 L 5 150 A 145 145 0 0 1 295 150 L 295 355 Z" 
                />
              </circle>
            </svg>
            
            {/* Floating arched image */}
            <img 
              src="/hero.png" 
              alt="Handmade Crochet Doll" 
              className="orbit-image"
            />
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" className="about-section animate-fade-in" style={{ animationDelay: '0.15s' }}>
        <div className="about-card">
          <div className="about-grid">
            {/* Left Column: Heading and Intro */}
            <div>
              <span className="text-label" style={{ color: 'var(--color-tertiary)', marginBottom: '16px', display: 'inline-block' }}>
                Our Story
              </span>
              <h2 className="text-display" style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '28px', color: '#FFFFFF' }}>
                About Us
              </h2>
              <p className="about-text">
                Welcome to our store, where style, quality, and simplicity come together. We are passionate about creating a seamless shopping experience by offering thoughtfully curated products that combine modern design with everyday functionality.
              </p>
            </div>

            {/* Right Column: Mission and Journey Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <p className="about-text">
                Our mission is to provide customers with high-quality products, an intuitive browsing experience, and a visually appealing platform that makes online shopping enjoyable and effortless. Every detail of our website has been designed with a focus on elegance, accessibility, and user experience.
              </p>
              <p className="about-text">
                Whether you're exploring our latest collections or discovering timeless favorites, we strive to deliver a shopping experience that is professional, reliable, and inspiring. Thank you for being a part of our journey.
              </p>
            </div>
          </div>
          {/* Interactive growing bottom border */}
          <div className="about-accent-line"></div>
        </div>
      </section>

      {/* View Products Section */}
      <section id="products" className="container animate-fade-in" style={{ padding: '80px var(--spacing-md) 100px var(--spacing-md)', animationDelay: '0.3s' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="text-label" style={{ color: 'var(--color-tertiary)' }}>The Collection</span>
          <h2 className="text-display" style={{ fontSize: '3rem', marginTop: '12px', textTransform: 'uppercase' }}>Artisan Pieces</h2>
          <div className="divider" style={{ width: '80px', margin: '24px auto', backgroundColor: 'var(--color-tertiary)' }}></div>
        </div>

        <div className="products-grid">
          {categories.map((category) => (
            <div key={category.id} className="product-card" style={{ padding: '24px' }}>
              {/* Styled Vector Crochet Placeholder Image */}
              <div className="product-image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{ width: '48px', height: '48px', opacity: 0.25 }}>
                  {/* Stylized crochet yarn loop icon */}
                  <path d="M50 20C33.4 20 20 33.4 20 50s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 54c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z" fill="var(--color-primary)"/>
                  <circle cx="50" cy="50" r="12" fill="none" stroke="var(--color-tertiary)" strokeWidth="2" strokeDasharray="3 2" />
                </svg>
                <span className="text-label" style={{ fontSize: '0.6rem', color: 'var(--color-secondary)', marginTop: '20px', letterSpacing: '0.15em' }}>
                  {category.name} Placeholder
                </span>
              </div>

              {/* Category Details */}
              <h3 className="product-title" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{category.name}</h3>
              <p className="product-quote" style={{ fontSize: '0.85rem', marginBottom: '8px' }}>"{category.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Me Section - Side-by-Side Layout */}
      <section id="contact" className="contact-section-grid animate-fade-in" style={{ animationDelay: '0.35s' }}>
        {/* Left Column: Direct Contact Info */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
          <span className="text-label" style={{ color: 'var(--color-tertiary)' }}>Get In Touch</span>
          <h2 className="text-display" style={{ fontSize: '3rem', marginTop: '12px', textTransform: 'uppercase', color: '#FFFFFF' }}>Contact Me</h2>
          <div className="divider" style={{ width: '80px', margin: '24px 0', backgroundColor: 'var(--color-tertiary)' }}></div>
          <p className="text-body" style={{ color: 'var(--color-secondary)', maxWidth: '400px', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '24px' }}>
            Have a custom request or wish to inquire about our premium collections? Please fill out the form or reach out directly using the details below.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <strong>Phone Number</strong>
              <span className="contact-info-value">+91 98667 15979</span>
            </div>
            <div className="contact-info-item">
              <strong>Email Address</strong>
              <span className="contact-info-value">
                <a href="mailto:abhisripolisetty@gmail.com" style={{ borderBottom: '1px dashed rgba(242, 238, 229, 0.3)', transition: 'border-color var(--transition-fast)' }} onMouseOver={(e) => e.target.style.borderColor = 'var(--color-tertiary)'} onMouseOut={(e) => e.target.style.borderColor = 'rgba(242, 238, 229, 0.3)'}>
                  abhisripolisetty@gmail.com
                </a>
              </span>
            </div>
            <div className="contact-info-item">
              <strong>Instagram Handle</strong>
              <span className="contact-info-value" style={{ opacity: 0.5 }}>[Instagram Account]</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-card">
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* 1. Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            {/* 2. Mobile Number */}
            <div className="form-group">
              <label className="form-label" htmlFor="mobile">Mobile Number</label>
              <input 
                type="tel" 
                id="mobile" 
                className="form-input" 
                placeholder="Enter 10-digit mobile number" 
                required 
              />
            </div>

            {/* 3. Email ID */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email ID</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="Enter your email address" 
                required 
              />
            </div>

            {/* 4. Product details */}
            <div className="form-group">
              <label className="form-label" htmlFor="product">Product Details (Customize & Buy)</label>
              <textarea 
                id="product" 
                className="form-input" 
                rows="4" 
                placeholder="Describe the product and any customizations you are looking for..." 
                required 
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px', padding: '16px' }}>
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '32px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTop: '1px solid rgba(242, 238, 229, 0.08)',
        backgroundColor: 'rgba(17, 17, 16, 0.5)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.png" alt="Cozy Loops Logo" style={{ height: '24px', width: '24px', borderRadius: '50%' }} />
          <div className="text-label" style={{ fontSize: '0.65rem' }}>
            © {new Date().getFullYear()} Cozy Loops. All rights reserved.
          </div>
        </div>
        <div className="text-label" style={{ fontSize: '0.82rem', fontStyle: 'italic', textTransform: 'none', letterSpacing: '0.08em', color: 'var(--color-secondary)' }}>
          "Made with love, stitched with care."
        </div>
      </footer>
    </div>
  )
}

export default App
