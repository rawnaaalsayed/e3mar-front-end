import { useState } from 'react'
import { LIQUIDITY_RATIO, FINANCE_LIMITS } from '../data/siteData'
import { formatPrice } from '../utils/distance'

const { maxDebt, maxFinance, minSalary } = FINANCE_LIMITS

export default function InstallmentUnification() {
  const [salary, setSalary] = useState('')
  const [debts, setDebts] = useState('')
  const [propertyPrice, setPropertyPrice] = useState('')
  const [result, setResult] = useState(null)

  function calculate(e) {
    e.preventDefault()
    const salaryNum = Number(salary)
    const debtsNum = Number(debts)
    const priceNum = Number(propertyPrice)

    if (!salaryNum || !priceNum) return

    const eligible = salaryNum >= minSalary
    const debtCovered = Math.min(debtsNum || 0, maxDebt)
    const financeAmount = Math.min(priceNum, maxFinance)
    const monthlyPayment = Math.round((financeAmount - debtCovered) / 240)
    const maxAffordable = Math.round(salaryNum * 0.33 * 240 + debtCovered)
    const approved = eligible && financeAmount <= maxAffordable

    setResult({
      eligible,
      debtCovered,
      maxFinance: financeAmount,
      monthlyPayment,
      approved,
      liquidityBonus: LIQUIDITY_RATIO >= 60,
    })
  }

  return (
    <section className="section installments" id="installments">
      <div className="container">
        <div className="installments-grid">
          <div className="installments-info">
            <span className="section-tag">خدمة مميزة</span>
            <h2>توحيد الأقساط</h2>
            <p>
              نوحد التزاماتك المالية في قسط واحد مريح. نسدد حتى{' '}
              <strong>700,000 ريال</strong> من ديونك الحالية ونضمها ضمن
              تمويلك العقاري الجديد.
            </p>

            <ul className="installments-benefits">
              <li>✅ قسط واحد بدل عدة أقساط</li>
              <li>✅ تخفيض العبء المالي الشهري</li>
              <li>✅ موافقة سريعة بنسبة سيولة {LIQUIDITY_RATIO}%</li>
              <li>✅ شروط مرنة تناسب راتبك</li>
            </ul>

            <div className="installments-stats">
              <div className="stat">
                <span className="stat-value">700K</span>
                <span className="stat-label">حد سداد الديون</span>
              </div>
              <div className="stat">
                <span className="stat-value">2M</span>
                <span className="stat-label">حد التمويل</span>
              </div>
              <div className="stat">
                <span className="stat-value">8K</span>
                <span className="stat-label">أقل راتب مقبول</span>
              </div>
            </div>
          </div>

          <form className="installments-form" onSubmit={calculate}>
            <h3>احسب أهليتك للتوحيد</h3>

            <label>
              الراتب الشهري (ريال)
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="مثال: 12000"
                min={0}
                required
              />
            </label>

            <label>
              إجمالي الديون الحالية (ريال)
              <input
                type="number"
                value={debts}
                onChange={(e) => setDebts(e.target.value)}
                placeholder="مثال: 150000"
                min={0}
              />
            </label>

            <label>
              سعر العقار المطلوب (ريال)
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                placeholder="مثال: 900000"
                min={0}
                required
              />
            </label>

            <button type="submit" className="btn btn-gold btn-full">
              احسب التمويل
            </button>

            {result && (
              <div className={`calc-result ${result.approved ? 'approved' : 'rejected'}`}>
                <h4>{result.approved ? '✅ مؤهل للتمويل' : '⚠️ يحتاج مراجعة'}</h4>
                <ul>
                  <li>
                    الأهلية: {result.eligible ? 'مؤهل' : `الحد الأدنى للراتب ${minSalary.toLocaleString('ar-SA')} ريال`}
                  </li>
                  <li>مبلغ سداد الديون: {formatPrice(result.debtCovered)}</li>
                  <li>التمويل المتاح: {formatPrice(result.maxFinance)}</li>
                  <li>القسط الشهري التقريبي: {formatPrice(result.monthlyPayment)}</li>
                  {result.liquidityBonus && (
                    <li>ميزة السيولة العالية ({LIQUIDITY_RATIO}%) تسرّع الموافقة</li>
                  )}
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
