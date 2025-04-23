export const setupInstructionsModal = () => {
  const modal = `
 <div id="instructions-modal" class="modal">
      <div class="modal-content">
        <span id="close-instructions-modal" class="close-btn">&times;</span>
        <div id="instructions-content">
          <section class="instructions-section">
            <h2>Instructions</h2>
            <p>
        Welcome to Stack Dew Valley.
You have been given a lucrative job working for the Southcoders Coding school in the countryside.
You mission, should you choose to accept it, is to receive a new intake of devlings thirsting for knowledge. Plant the devlings in your devling patch and water them with all the knowledge of coding they will need in order to succeed in the job market. Once your Devlings have learned all they can, you must harvest and take them to the dreaded job arena where they will battle it out with devlings from the insidious Eastcoders bootcamp to win the the ultimate prize. A job in the tech industry spending their days tapping away at keyboard in the pursuit of the most noble goal, creating the ultimate piece of code. 

When the game starts. The player must go to their laptop and collect the first intake of devlings, then take them to the devling patch. move the player around using the arrow keys. Players can interact with the laptop using the space-bar. Once planted, water your devlings with knowledge. Be careful if your devlings use AI too many times, they will be sent to the Tech Dungeon, where they will only be freed after solving coding tests without AI or by solving the identity of the eternal 'Mitch'. When your devlings have been harvested, take them to the job market and battle it out against the East coders. Good Luck!

More features will be added to this game soon including: programming problems for the devlings to solve.
More complex game mechanics for fight sequences. Customisable characters.
            </p>
          </section>
        </div>
      </div>
    </div>
`

  document.body.insertAdjacentElement('beforeend', modal)

  const instructionModal = document.getElementById('instructions-modal')
  const closeBtn = document.getElementById('close-instructions-modal')

  closeBtn.addEventListener('click', () => {
    instructionModal.style.display = 'none'
  })

  window.addEventListener('click', (e) => {
    if (e.target === instructionModal) {
      instructionModal.style.display = 'none'
    }
  })

  const instructionLink = document.querySelector('a[href="#instructions"]')
  if (instructionLink) {
    instructionLink.addEventListener('click', (e) => {
      e.preventDefault()
      instructionModal.style.display = 'block'
    })
  }
}
