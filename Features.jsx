import { features } from '../data/siteData'

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <div className="features-bar">
          {features.map((f) => (
            <div key={f.title} className="feature-item">
              <span className="feature-icon">{f.icon}</span>
              <span>{f.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
