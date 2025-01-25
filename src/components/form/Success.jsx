
import IconList from '../../assets/images/icon-list.svg';

export default function Success({reset, showTime}) {
    console.log("showtime in the Sucess component", showTime)
    return (
        <section id='success-sign-up' className={showTime ? 'form block' : 'from'}  >
        <div id="success-container">
        <img src={IconList} alt='' />
        <h3 id="success-title">Thanks for subscribing!</h3>
        <p id="success-txt">A confirmation email has been sent to <strong>ash@loremcompany.com</strong> . 
        Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button onClick={() => reset()} >Dismiss message</button>
      </section>
    )
}