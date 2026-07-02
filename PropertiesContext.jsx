import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { api } from '../utils/api'
import { enrichProperty, preparePropertyPayload } from '../utils/propertyUtils'

const PropertiesContext = createContext(null)

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProperties = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.getProperties()
      setProperties(data.map(enrichProperty))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  async function addProperty(data) {
    const property = await api.createProperty(preparePropertyPayload(data))
    setProperties((prev) => [enrichProperty(property), ...prev])
    return property
  }

  async function updateProperty(id, data) {
    const property = await api.updateProperty(id, preparePropertyPayload(data))
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? enrichProperty(property) : p))
    )
  }

  async function deleteProperty(id) {
    await api.deleteProperty(id)
    setProperties((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <PropertiesContext.Provider
      value={{ properties, loading, error, addProperty, updateProperty, deleteProperty }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}

export function useProperties() {
  const ctx = useContext(PropertiesContext)
  if (!ctx) throw new Error('useProperties must be used within PropertiesProvider')
  return ctx
}
