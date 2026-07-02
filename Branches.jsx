import { useState } from 'react'
import { branches, regions } from '../data/siteData'

export default function Branches() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all'
      ? branches
      : branches.filter((b) => b.regionId === filter)

  return (
    <section className="section branches" id="branches">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">فروعنا</span>
          <h2>فروع سيولة الإعمار</h2>
          <p>زُر أقرب فرع لك واحصل على استشارة مجانية</p>
        </div>

        <div className="filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            الكل
          </button>
          {regions.map((r) => (
            <button
              key={r.id}
              className={`filter-btn ${filter === r.id ? 'active' : ''}`}
              onClick={() => setFilter(r.id)}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div className="branches-grid">
          {filtered.map((branch) => (
            <div key={branch.id} className="branch-card">
              <div className="branch-header">
                <h3>{branch.name}</h3>
                <span className="branch-badge">مفتوح</span>
              </div>
              <ul className="branch-details">
                <li>
                  <span className="detail-icon">📍</span>
                  {branch.address}
                </li>
                <li>
                  <span className="detail-icon">📞</span>
                  <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                </li>
                <li>
                  <span className="detail-icon">🕐</span>
                  {branch.hours}
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm branch-map"
              >
                عرض على الخريطة
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
