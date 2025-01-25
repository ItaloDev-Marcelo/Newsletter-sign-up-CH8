import IconList from '../../assets/images/icon-list.svg';
import Form from '../../components/form';

import Desk from '../../assets/images/illustration-sign-up-desktop.svg';
import Mobile from '../../assets/images/illustration-sign-up-mobile.svg';

export default function Header() {
   return (
      <div>
         <header id='header-container'>
          <h1 id="header-title">Stay updated!</h1>
          <p id="header-text-info">Join 60,000+ product managers receiving monthly updates on:</p>
          <div id="news-row-container">
            <div id="row-item">
              <img src={IconList} alt=''/>
              <p className='row-txt'> Product discovery and building what matters</p>
            </div>
            <div id="row-item">
            <img src={IconList} alt=''/>
            <p className='row-txt'>Measuring to ensure updates are a success</p>
            </div>
            <div id="row-item">
            <img src={IconList} alt=''/>
            <p className='row-txt'> And much more!</p>
            </div>
          </div>
          <Form/>
      </header>
         <picture id='image-container'>
                   <img src={Desk} alt='err-1' id='Desk-image' />
                   <img src={Mobile} alt='err-2' id='Mobile-image' />
          </picture>
      </div>
   )
}