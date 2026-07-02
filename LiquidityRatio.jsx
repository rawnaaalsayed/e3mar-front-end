import { useEffect, useState } from 'react'
import { LIQUIDITY_RATIO } from '../data/siteData'

export default function LiquidityRatio() {
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    const duration = 1500
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setAnimated(Math.round(eased * LIQUIDITY_RATIO))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const circumference = 2 * Math.PI * 90
  const offset = circumference - (animated / 100) * circumference

  return (
    <section className="section liquidity" id="liquidity">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">مؤشر الأداء</span>
          <h2>نسبة السيولة</h2>
          <p>نسبة سيولة مرتفعة تعكس قوة الشركة وقدرتها على تلبية طلبات التمويل</p>
        </div>

        <div className="liquidity-grid">
          <div className="liquidity-chart">
            <svg viewBox="0 0 200 200" className="chart-svg">
              <circle cx="100" cy="100" r="90" className="chart-bg" />
              <circle
                cx="100"
                cy="100"
                r="90"
                className="chart-fill"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="chart-value">
              <span className="chart-number">{animated}%</span>
              <span className="chart-label">نسبة السيولة</span>
            </div>
          </div>

          <div className="liquidity-info">
            <div className="info-card">
              <div className="info-icon">📈</div>
              <div>
                <h3>سيولة عالية</h3>
                <p>
                  نسبة سيولة {LIQUIDITY_RATIO}% تضمن سرعة الموافقة على طلبات التمويل
                  العقاري واستجابة فورية لاحتياجات عملائنا.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🏦</div>
              <div>
                <h3>تمويل حتى 2 مليون ريال</h3>
                <p>
                  نقدم حلول تمويلية شاملة تغطي مختلف أنواع العقارات السكنية
                  والتجارية في جميع مناطق خدمتنا.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⚡</div>
              <div>
                <h3>موافقة سريعة</h3>
                <p>
                  إجراءات مبسطة وموافقة فورية بفضل قوة السيولة المالية
                  والخبرة في قطاع التمويل العقاري.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
