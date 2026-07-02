const R = 6371

function toRad(deg) {
  return (deg * Math.PI) / 180
}

export function haversineDistance(lat1, lng1, lat2, lng2) {
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export function sortByDistance(items, userLat, userLng) {
  return [...items]
    .map((item) => ({
      ...item,
      distance: haversineDistance(userLat, userLng, item.lat, item.lng),
    }))
    .sort((a, b) => a.distance - b.distance)
}

export function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)} م`
  return `${km.toFixed(1)} كم`
}

export function formatPrice(price) {
  return new Intl.NumberFormat('ar-SA').format(price) + ' ريال'
}
