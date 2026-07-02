const TOKEN_KEY = 'sioula_token'

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  const token = getToken()
  if (token) headers.Authorization = `Bearer ${token}`

  const res = await fetch(path, { ...options, headers })
  const data = await res.json().catch(() => ({}))

  if (!res.ok) throw new Error(data.error || 'حدث خطأ في الاتصال')
  return data
}

export const api = {
  login: (username, password) =>
    request('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),

  getProperties: () => request('/api/properties'),

  createProperty: (property) =>
    request('/api/properties', { method: 'POST', body: JSON.stringify(property) }),

  updateProperty: (id, property) =>
    request(`/api/properties/${id}`, { method: 'PUT', body: JSON.stringify(property) }),

  deleteProperty: (id) =>
    request(`/api/properties/${id}`, { method: 'DELETE' }),

  changePassword: (currentPassword, newPassword) =>
    request('/api/admin/password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    }),
}
