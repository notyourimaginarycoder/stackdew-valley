import { auth, db } from './src/firebase/firebase-init'

import { doc, getDoc, setDoc } from 'firebase/firestore'

import {
  addItemToInventory,
  removeLastItemFromInventory,
} from './src/firebase/firebase-queries'

const testButton1 = document.getElementById('test-button1')
const testButton2 = document.getElementById('test-button2')
const testButton3 = document.getElementById('test-button3')
const testButton4 = document.getElementById('test-button4')

let userInventory = []

testButton1.addEventListener('click', async () => {
  const uid = auth.currentUser?.uid
  const userDocRef = doc(db, 'users', uid)
  const userDocSnap = await getDoc(userDocRef)

  const inventory = userDocSnap.data()?.inventory
  if (!inventory) return console.warn('No inventory found')

  console.log('Inventory:')
  Object.entries(inventory).forEach(([slot, data]) => {
    console.log(`${slot}:`, data.item ? data.item : 'Empty')
  })

  userInventory = inventory
})

testButton2.addEventListener('click', async () => {
  const currentUserUID = auth.currentUser?.uid
  const userDocRef = doc(db, 'users', currentUserUID)

  const emptyInventory = {}
  for (let i = 0; i < 5; i++) {
    emptyInventory[`slot${i}`] = { item: null }
  }

  await setDoc(
    userDocRef,
    {
      inventory: emptyInventory,
    },
    { merge: true }
  )

  console.log('Inventory initialized with empty slots.')
})

testButton3.addEventListener('click', async () => {
  const randomItem = {
    name: 'Laura',
    type: 'devling',
    stats: {
      'front-end': Math.floor(Math.random() * 4),
      'back-end': Math.floor(Math.random() * 4),
      'dev-ego': Math.floor(Math.random() * 4),
      emotional: Math.floor(Math.random() * 4),
      'google-skills': Math.floor(Math.random() * 4),
    },
  }

  await addItemToInventory(randomItem)
})

testButton4.addEventListener('click', removeLastItemFromInventory)
