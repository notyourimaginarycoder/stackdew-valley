export const setupAboutModal = () => {
    const modal = `
      <div id="about-modal" class="modal">
        <div class="modal-content">
          <span id="close-about-modal" class="close-btn">&times;</span>
          <div id="about-content">
            <h2>About This Project</h2>
          </div>
        </div>
      </div>
    `
  
    document.body.insertAdjacentHTML('beforeend', modal)
  
    const aboutModal = document.getElementById('about-modal')
    const closeBtn = document.getElementById('close-about-modal')
  
    closeBtn.addEventListener('click', () => {
      aboutModal.style.display = 'none'
    })

    window.addEventListener('click', (e) => {
      if (e.target === aboutModal) {
        aboutModal.style.display = 'none'
      }
    })

    const aboutLink = document.querySelector('a[href="#about"]')
    if (aboutLink) {
      aboutLink.addEventListener('click', (e) => {
        e.preventDefault()
        aboutModal.style.display = 'block'
      })
    }
  }
  