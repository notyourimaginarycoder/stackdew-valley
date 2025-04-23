const generateTeamProfiles = (team) => {
  return team
    .map(
      (dev) => `
      <div class="team-member">
        <img src="https://avatars.githubusercontent.com/${dev.github}" alt="${dev.name}" class="avatar" />
        <h3>${dev.name}</h3>
        <a href="https://github.com/${dev.github}" target="_blank">GitHub</a>
      </div>
    `
    )
    .join('')
}

export const setupAboutModal = () => {
  const modal = `
    <div id="about-modal" class="modal">
      <div class="modal-content">
        <span id="close-about-modal" class="close-btn">&times;</span>
        <div id="about-content">
          <section class="about-section">
            <h2>Meet the Team</h2>
            <div class="team-grid">
              ${generateTeamProfiles([
                { name: 'Chris Askew', github: 'slightly76' },
                { name: 'Tymur Holovko', github: 'papaparadox' },
                { name: 'Sophie Thompson', github: 'sophtompa' },
                { name: 'Paul McDonagh', github: 'testmango-sudo' },
                { name: 'Ken\'Terria Reaves', github: 'MuseOfCode' },
                { name: 'Dean Wilson', github: 'notyourimaginarycoder' },
              ])}
            </div>
          </section>

          <hr/>

          <section class="about-section">
            <h2>Tech-stack</h2>
              <p>built with <strong>javascript, vite, phaser</strong></p>
          </section>
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
