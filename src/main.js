import './style.css'
import '../test.js'

import { onAuthStateChanged, signOut } from 'firebase/auth'

import { auth } from './firebase/firebase-init'
import { handleAuthStateChange } from './firebase/firebase-queries.js'
import { setupAuthModal } from './components/auth'

import { initThemeSwitcher } from './components/mode-switch.js'

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.createElement('nav')
  navbar.classList.add('navbar')
  navbar.innerHTML = `
    <ul class="navbar-left">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
  </ul>
  <ul class="navbar-right">
      <li><span id="user-display" style="color:white;"></span></li>
      <li><button id="login-btn">Login</button></li>
      <li><button id="logout-btn" style="display: none;">Logout</button></li>
      <li><button id="theme-toggle" aria-label="Toggle dark mode">🌞</button></li>
  </ul>
    `

  const app = document.getElementById('app')
  app.appendChild(navbar)



  setupAuthModal()

  onAuthStateChanged(auth, (user) => {
    handleAuthStateChange(user)
  })

  initThemeSwitcher()
})

document.addEventListener('click', async (e) => {
  if (e.target.id === 'logout-btn') {
    try {
      await signOut(auth)
      document.getElementById('user-display').textContent = ''
      alert('Successfully logged out')
    } catch (error) {
      console.error('Logout error:', error)
      alert(`Logout failed: ${error.message}`)
    }
  }
})
