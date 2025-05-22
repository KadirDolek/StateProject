import './Step5.css'
import Thankyou from '/src/assets/Img/thankyou.svg' 


export default function Step5(){


    return(


        <div id='lastdiv'>
            <div>
                <img src={Thankyou} alt="" />
            </div>
            <div style={{textAlign:'center', paddingLeft:'12.5%', paddingRight:'12.5%'}}>
                <h1>Thank you!</h1>
                <p style={{ opacity:'70%'}}>Thank for you confirming your subscription! We hope you had fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </div>
    )
}