export const LIQUIDITY_RATIO = 68

export const FINANCE_LIMITS = {
  maxDebt: 700000,
  maxFinance: 2000000,
  minSalary: 8000,
}

export const CONTACT = {
  phone: '920001234',
  phoneIntl: '966920001234',
  email: 'info@sioula.com',
  whatsappMessage: 'مرحباً، أريد الاستفسار عن خدمات سيولة الإعمار',
}

export const PROPERTY_TYPES = ['فيلا', 'شقة', 'أرض', 'دوبلكس', 'تاون هاوس', 'عمارة']

export const EMPTY_PROPERTY = {
  title: '',
  regionId: 'riyadh',
  type: 'فيلا',
  price: '',
  area: '',
  rooms: '',
  bathrooms: '',
  lat: '',
  lng: '',
  image: '',
  description: '',
  features: '',
  yearBuilt: new Date().getFullYear(),
  status: 'available',
}

export const NAV_LINKS = [
  { href: '#liquidity', label: 'نسبة السيولة' },
  { href: '#regions', label: 'المناطق' },
  { href: '#branches', label: 'الفروع' },
  { href: '#properties', label: 'العقارات' },
  { href: '#installments', label: 'توحيد الأقساط' },
]

export const regions = [
  { id: 'riyadh', name: 'الرياض', lat: 24.7136, lng: 46.6753 },
  { id: 'khabra', name: 'الخبراء', lat: 26.1167, lng: 43.9667 },
  { id: 'badaya', name: 'البدائع', lat: 26.3167, lng: 43.6667 },
  { id: 'hail', name: 'حائل', lat: 27.5114, lng: 41.6901 },
  { id: 'mithnab', name: 'المذنب', lat: 25.8667, lng: 44.2167 },
  { id: 'dawadmi', name: 'الدوادمي', lat: 24.5077, lng: 44.3924 },
  { id: 'afif', name: 'عفيف', lat: 23.9065, lng: 42.9172 },
  { id: 'nafi', name: 'نفي', lat: 24.4833, lng: 42.0167 },
  { id: 'sajer', name: 'ساجر', lat: 25.1833, lng: 44.6167 },
]

export const branches = [
  { id: 1, name: 'فرع الرياض الرئيسي', regionId: 'riyadh', address: 'طريق الملك فهد، حي العليا', phone: '0112345678', hours: 'السبت - الخميس: 9 ص - 9 م', lat: 24.7136, lng: 46.6753 },
  { id: 2, name: 'فرع الخبراء', regionId: 'khabra', address: 'شارع الأمير سلطان، وسط المدينة', phone: '0162345678', hours: 'السبت - الخميس: 9 ص - 6 م', lat: 26.1167, lng: 43.9667 },
  { id: 3, name: 'فرع البدائع', regionId: 'badaya', address: 'حي النخيل، طريق القصيم', phone: '0163345678', hours: 'السبت - الخميس: 9 ص - 6 م', lat: 26.3167, lng: 43.6667 },
  { id: 4, name: 'فرع حائل', regionId: 'hail', address: 'طريق الملك عبدالعزيز، حي السمراء', phone: '0165345678', hours: 'السبت - الخميس: 9 ص - 6 م', lat: 27.5114, lng: 41.6901 },
  { id: 5, name: 'فرع المذنب', regionId: 'mithnab', address: 'شارع التحلية، وسط المذنب', phone: '0164345678', hours: 'السبت - الخميس: 9 ص - 5 م', lat: 25.8667, lng: 44.2167 },
  { id: 6, name: 'فرع الدوادمي', regionId: 'dawadmi', address: 'طريق الملك سلمان، حي الورود', phone: '0116345678', hours: 'السبت - الخميس: 9 ص - 6 م', lat: 24.5077, lng: 44.3924 },
  { id: 7, name: 'فرع عفيف', regionId: 'afif', address: 'شارع الملك فيصل، وسط عفيف', phone: '0117345678', hours: 'السبت - الخميس: 9 ص - 5 م', lat: 23.9065, lng: 42.9172 },
  { id: 8, name: 'فرع نفي', regionId: 'nafi', address: 'الطريق العام، وسط نفي', phone: '0118345678', hours: 'السبت - الخميس: 9 ص - 5 م', lat: 24.4833, lng: 42.0167 },
  { id: 9, name: 'فرع ساجر', regionId: 'sajer', address: 'حي الملك فهد، ساجر', phone: '0119345678', hours: 'السبت - الخميس: 9 ص - 5 م', lat: 25.1833, lng: 44.6167 },
]

export const services = [
  { icon: '🏠', title: 'تمويل عقاري حتى 2,000,000 ريال' },
  { icon: '💰', title: 'نستقبل رواتب من 8,000 ريال' },
  { icon: '💳', title: 'نسدد حتى 700 ألف ريال' },
]

export const features = [
  { icon: '🎧', title: 'دعم متواصل' },
  { icon: '📋', title: 'شفافية ومصداقية' },
  { icon: '🤝', title: 'حلول مرنة تناسبك' },
  { icon: '✅', title: 'إجراءات سريعة وسهلة' },
]

export function getRegionName(regionId) {
  return regions.find((r) => r.id === regionId)?.name ?? regionId
}
