import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import ProfileHeader from './profileHeader'
import Technologies from './Technologies'
import Project from './project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-stone-300">
      <Nav />
      <ProfileHeader />
      <Technologies />
      <Project />
    </div>
    </>
  )
}

export default App
