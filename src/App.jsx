import { useEffect, useState } from 'react';
// import {BrowserView, MobileView} from 'react-device-detect'
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
      {/* <BrowserView> */}
        {loading ? <Loader /> : <HomePage />}
      {/* </BrowserView>
      <MobileView>
        <h3 className='font-sansCJK_JP text-center mt-[200px]'>
          この画面はサポートされていません
        </h3>
      </MobileView> */}
    </>
  )
}

export default App
