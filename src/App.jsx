import { useEffect, useState } from 'react';
import './App.css'
import HomePage from './pages/Home';
import { Loader } from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <>
      {loading 
        ? <Loader />
        : <HomePage />
      }
    </>
  )
}

export default App
