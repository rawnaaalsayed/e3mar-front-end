import { regions } from '../data/siteData'

export default function Regions() {
  return (
    <section className="section regions" id="regions">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">تغطية واسعة</span>
          <h2>المناطق المتاحة</h2>
          <p>نخدم 9 مناطق في المملكة العربية السعودية</p>
        </div>

        <div className="regions-grid">
          {regions.map((region, i) => (
            <div key={region.id} className="region-card" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="region-pin">📍</div>
              <h3>{region.name}</h3>
              <span className="region-status">متاح</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
