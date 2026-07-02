import { LIQUIDITY_RATIO, getRegionName } from '../data/siteData'

const DEFAULT_FEATURES = ['موقف سيارات', 'تكييف مركزي', 'قريب من الخدمات', 'قابل للتمويل']

export function parseFeatures(features) {
  if (Array.isArray(features)) return features
  if (typeof features === 'string') {
    return features.split(/[,،]/).map((f) => f.trim()).filter(Boolean)
  }
  return []
}

export function preparePropertyPayload(data) {
  return {
    ...data,
    price: Number(data.price),
    area: Number(data.area),
    rooms: Number(data.rooms) || 0,
    bathrooms: Number(data.bathrooms) || 0,
    lat: Number(data.lat),
    lng: Number(data.lng),
    yearBuilt: Number(data.yearBuilt),
    features: parseFeatures(data.features),
  }
}

export function enrichProperty(property) {
  const regionName = getRegionName(property.regionId)
  return {
    ...property,
    bathrooms: property.bathrooms ?? (property.rooms > 0 ? Math.max(1, property.rooms - 1) : 0),
    description:
      property.description ||
      `عقار ${property.type} مميز في ${regionName} بمساحة ${property.area} م². يتميز بموقع استراتيجي وإمكانية التمويل العقاري بنسبة سيولة ${LIQUIDITY_RATIO}%.`,
    features: property.features?.length ? property.features : DEFAULT_FEATURES,
    yearBuilt: property.yearBuilt ?? 2023,
    status: property.status ?? 'available',
  }
}
