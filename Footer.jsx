import { CONTACT, NAV_LINKS } from '../data/siteData'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.svg" alt="سيولة الإعمار" className="logo-icon" />
              <div className="logo-text">
                <span className="logo-ar">سيولة الإعمار</span>
                <span className="logo-en">LIQUIDITY OF CONSTRUCTION</span>
              </div>
            </div>
            <p className="footer-slogan">سيولة الإعمار .. تمويل يبني أحلامك</p>
          </div>

          <div className="footer-links">
            <h4>روابط سريعة</h4>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <div className="footer-contact">
            <h4>تواصل معنا</h4>
            <p>✉️ {CONTACT.email}</p>
            <p>📍 الرياض، المملكة العربية السعودية</p>
            <div className="footer-contact-buttons">
              <a href={`tel:${CONTACT.phone}`} className="btn btn-gold btn-sm contact-btn">
                📞 اتصل الآن
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm contact-btn contact-btn-whatsapp">
                💬 واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()}سيولة الإعمار. جميع الحقوق محفوظة.</p>
          <p>ابدأ رحلتك الآن نحو التملك!</p>
          <p>Powerd by ENG : Rawnaa Alsayed</p>

        </div>
      </div>
    </footer>
  )
}
