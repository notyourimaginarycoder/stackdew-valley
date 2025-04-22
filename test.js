import { auth, db } from './src/firebase/firebase-init'

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

const testButton1 = document.getElementById('test-button1')
const testButton2 = document.getElementById('test-button2')

let userInventory = []

testButton1.addEventListener('click', async () => {
  let currentUserUID = auth.currentUser.uid

  const userDocRef = doc(db, 'users', currentUserUID)
  const userDocSnap = await getDoc(userDocRef)
  const userData = userDocSnap.data()
  console.log(userData.inventory)
  userInventory = userData.inventory
  console.log(userInventory)
})

testButton2.addEventListener('click', async () => {
    let currentUserUID = auth.currentUser.uid
    const userDocRef = doc(db, 'users', currentUserUID)
    await setDoc(userDocRef, {
        inventory: [
            { slot0: {
          "devling-name": "Laura",
          "front-end": Math.round(Math.random() * 3),
          "back-end": Math.round(Math.random() * 3),
          "dev-ego": Math.round(Math.random() * 3),
          emotional: Math.round(Math.random() * 3),
          "google-skills": Math.round(Math.random() * 3),
        }},
            { slot1: { item: '' } },
            { slot2: { item: '' } },
            { slot3: { item: '' } },
            { slot4: { item: '' } },
          ]
    })
})
