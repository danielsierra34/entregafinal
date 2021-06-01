import './Home.css';
import bandera from '../../bandera.svg'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'


import animationData from '../Lottie/Lottie.json'
import Lottie from 'react-lottie';

export const Home = (props) => {


     const [animacionFinalizada,setAnimacionFinalizada]=useState(false)

     const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };

    useEffect(()=>{
        setTimeout(function(){ 
            setAnimacionFinalizada(true)
         }, 30000);
    },[])


      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
       const eventListeners=[
        {
          eventName: 'complete',
          callback: () => setAnimacionFinalizada(true),
        },
      ]

    return(
        <div className="Home">
            {!animacionFinalizada ? (
                    <div>
                        <Lottie options={defaultOptions} height={400} width={400} isStopped={false} isPaused={false} eventListeners={eventListeners}/>
                    </div>
            ) : (
                <div>
                    <h1>Bienvenidos a Mexifoods</h1> 
                    <img src={bandera} height={80}/>
                    <div className="bloqueBoton">                
                        <Link to={`/categories/`} className="myButton">Ingresar</Link> 
                    </div>
                </div>
            )}
 
           
            

        </div>
    )
}