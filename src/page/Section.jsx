import IconList from '../assets/images/icon-list.svg';

export default function Success({Reset}) {
    return (
        <article id='success-sign-up' >
        <div id="success-container">
        <img src={IconList} alt='' />
        <h3 id="success-title">Thanks for subscribing!</h3>
        <p id="success-txt">A confirmation email has been sent to <strong>ash@loremcompany.com</strong> . 
        Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button id='submit' onClick={() => Reset()} >Dismiss message</button>
      </article>
    )
}