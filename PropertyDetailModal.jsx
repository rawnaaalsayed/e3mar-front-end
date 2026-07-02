import { LIQUIDITY_RATIO, FINANCE_LIMITS, CONTACT, getRegionName } from '../data/siteData'
import { formatPrice } from '../utils/distance'

export default function PropertyDetailModal({ property, onClose }) {
  if (!property) return null

  const monthlyPayment = Math.round(property.price / 240)
  const regionName = getRegionName(property.regionId)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content property-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="إغلاق">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-image">
            <img src={property.image} alt={property.title} />
            <span className="property-type">{property.type}</span>
            {property.status === 'sold' && (
              <span className="property-sold-badge">تم البيع</span>
            )}
          </div>

          <div className="modal-body">
            <h2>{property.title}</h2>
            <p className="modal-region">📍 {regionName}</p>

            <div className="modal-price-block">
              <span className="modal-price">{formatPrice(property.price)}</span>
              <span className="modal-monthly">
                قسط شهري تقريبي: {formatPrice(monthlyPayment)}
              </span>
            </div>

            <div className="modal-stats">
              <div className="modal-stat">
                <span className="stat-num">{property.area}</span>
                <span className="stat-lbl">م²</span>
              </div>
              {property.rooms > 0 && (
                <div className="modal-stat">
                  <span className="stat-num">{property.rooms}</span>
                  <span className="stat-lbl">غرف</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="modal-stat">
                  <span className="stat-num">{property.bathrooms}</span>
                  <span className="stat-lbl">حمامات</span>
                </div>
              )}
              <div className="modal-stat">
                <span className="stat-num">{property.yearBuilt}</span>
                <span className="stat-lbl">سنة البناء</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>وصف العقار</h3>
              <p>{property.description}</p>
            </div>

            <div className="modal-section">
              <h3>المميزات</h3>
              <ul className="modal-features">
                {property.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>

            <div className="modal-financing">
              <h3>🎯 خيارات التمويل</h3>
              <ul>
                <li>نسبة سيولة {LIQUIDITY_RATIO}% — موافقة سريعة</li>
                <li>تمويل حتى {FINANCE_LIMITS.maxFinance.toLocaleString('ar-SA')} ريال</li>
                <li>توحيد أقساط حتى {FINANCE_LIMITS.maxDebt.toLocaleString('ar-SA')} ريال</li>
                <li>رواتب من {FINANCE_LIMITS.minSalary.toLocaleString('ar-SA')} ريال</li>
              </ul>
            </div>

            <div className="modal-actions">
              <a href={`tel:${CONTACT.phone}`} className="btn btn-gold">
                📞 اتصل الآن
              </a>
              <a
                href={`https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(
                  `مرحباً، أريد الاستفسار عن: ${property.title} - ${regionName}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                💬 واتساب
              </a>
              <a
                href={`https://www.google.com/maps?q=${property.lat},${property.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                🗺️ الموقع
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
