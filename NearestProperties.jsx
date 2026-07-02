import { useEffect, useState } from 'react'
import { regions, getRegionName } from '../data/siteData'
import { useProperties } from '../context/PropertiesContext'
import { sortByDistance, formatDistance, formatPrice } from '../utils/distance'
import PropertyDetailModal from './PropertyDetailModal'

export default function NearestProperties() {
  const { properties, loading: propertiesLoading, error: propertiesError } = useProperties()
  const [userLocation, setUserLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [regionFilter, setRegionFilter] = useState('all')
  const [sorted, setSorted] = useState(properties)
  const [selectedProperty, setSelectedProperty] = useState(null)

  useEffect(() => {
    let list = properties.filter((p) => p.status !== 'sold')
    if (regionFilter !== 'all') {
      list = list.filter((p) => p.regionId === regionFilter)
    }
    if (userLocation) {
      setSorted(sortByDistance(list, userLocation.lat, userLocation.lng))
    } else {
      setSorted(list)
    }
  }, [userLocation, regionFilter, properties])

  function detectLocation() {
    if (!navigator.geolocation) {
      setError('المتصفح لا يدعم تحديد الموقع')
      return
    }
    setLoading(true)
    setError(null)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setLoading(false)
      },
      () => {
        setError('تعذر تحديد موقعك. يمكنك اختيار منطقة من الفلتر.')
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <>
      <section className="section properties" id="properties">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">عقاراتنا</span>
            <h2>{userLocation ? 'أقرب العقارات إليك' : 'العقارات المتاحة'}</h2>
            <p>اكتشف أفضل العقارات في مناطق خدمتنا</p>
          </div>

          <div className="properties-toolbar">
            <button
              className="btn btn-gold btn-sm"
              onClick={detectLocation}
              disabled={loading}
            >
              {loading ? 'جاري التحديد...' : '📍 حدد موقعي'}
            </button>

            <select
              className="region-select"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="all">كل المناطق</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>

          {propertiesError && <p className="location-error">{propertiesError}</p>}
          {error && <p className="location-error">{error}</p>}

          {propertiesLoading ? (
            <p className="admin-empty">جاري تحميل العقارات...</p>
          ) : (
          <div className="properties-grid">
            {sorted.map((property, i) => (
              <article key={property.id} className="property-card">
                <div className="property-image-wrap">
                  <img src={property.image} alt={property.title} loading="lazy" />
                  <span className="property-type">{property.type}</span>
                  {userLocation && property.distance !== undefined && (
                    <span className="property-distance">
                      {formatDistance(property.distance)}
                    </span>
                  )}
                  {userLocation && i === 0 && (
                    <span className="property-nearest">الأقرب</span>
                  )}
                </div>
                <div className="property-body">
                  <h3>{property.title}</h3>
                  <p className="property-region">📍 {getRegionName(property.regionId)}</p>
                  <div className="property-meta">
                    {property.rooms > 0 && <span>{property.rooms} غرف</span>}
                    <span>{property.area} م²</span>
                  </div>
                  <div className="property-footer">
                    <span className="property-price">{formatPrice(property.price)}</span>
                    <button
                      className="btn btn-gold btn-sm"
                      onClick={() => setSelectedProperty(property)}
                    >
                      استفسر
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          )}

          {!propertiesLoading && sorted.length === 0 && (
            <p className="admin-empty">لا توجد عقارات متاحة في هذه المنطقة حالياً.</p>
          )}
        </div>
      </section>

      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  )
}
