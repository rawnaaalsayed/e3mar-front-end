import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { PropertiesProvider } from './context/PropertiesContext'
import HomePage from './pages/HomePage'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <AuthProvider>
      <PropertiesProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </PropertiesProvider>
    </AuthProvider>
  )
}
