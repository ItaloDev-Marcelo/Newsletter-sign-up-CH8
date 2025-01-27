import { useState } from 'react'
import './App.css'
import Form from './components/form'
import IconList from './assets/images/icon-list.svg';
import Desk from './assets/images/illustration-sign-up-desktop.svg';
import Mobile from './assets/images/illustration-sign-up-mobile.svg';
import Success from './page/Section';
import UseLayout from './page/hook/use-layout';

function App() {

  const [showBlock, setShowBlock] = useState(false)
  const [showBlockSucess, setShowBlockSucess] = useState(true)
  const WindowSize = UseLayout()

  function hundleUpdate() {
    setShowBlock(!showBlock)
  }

  function Reset() {
    setShowBlockSucess(!showBlockSucess)
    setShowBlock(!showBlock)
}

  return (
        <main>
          <section  className={showBlockSucess ? 'card active' : 'card'}>
          <header id='header-content'>
             <h1 id="header-title">Stay updated!</h1>
             <p id="header-text-info">Join 60,000+ product managers receiving monthly updates on:</p>
             <div id="news-row-container">
               <div className="row-item">
                <div>
                 <img src={IconList} alt=''/>
                </div>
                 <p className='row-txt'> Product discovery and building what matters</p>
               </div>
               <div  className="row-item">
               <div>
                 <img src={IconList} alt=''/>
                </div>
               <p className='row-txt'>Measuring to ensure updates are a success</p>
               </div>
               <div  className="row-item">
               <div>
                 <img src={IconList} alt=''/>
                </div>
               <p className='row-txt'> And much more!</p>
               </div>
             </div>
             <Form  setShowBlockSucess={setShowBlockSucess} hundleUpdate={hundleUpdate}/>
         </header>
         <picture id='image-container'>
                      {WindowSize  <= 1000 ? <img src={Mobile} alt='err-2' id='Mobile-image' /> : <img src={Desk} alt='err-1' id='Desk-image' />}
         </picture>
          </section>
          <div className={showBlock ? 'successCard active' : 'successCard'}>
            <Success Reset={Reset}/>
          </div>
         </main>
  )
}

export default App
