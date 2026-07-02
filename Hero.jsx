import { services } from '../data/siteData'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-badge">تحلم بمنزل أحلامك؟</p>
        <h1 className="hero-title">
          <span className="gold">تمويل عقاري</span> بين يديك
        </h1>
        <p className="hero-subtitle">
          نحو تمويل أسهل .. لحياة ومستقبل أفضل
        </p>
        <div className="hero-actions">
          <a href="#properties" className="btn btn-gold">استكشف العقارات</a>
          <a href="#installments" className="btn btn-outline">توحيد الأقساط</a>
        </div>

        <div className="hero-cards">
          {services.map((s) => (
            <div key={s.title} className="hero-card">
              <span className="hero-card-icon">{s.icon}</span>
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
