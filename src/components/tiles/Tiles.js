import './index.css';
import busUrl from '../assets/4.transport.png'
import ecoShoppingUrl from '../assets/2.ecoShopping.png'
import trashUrl from '../assets/1.trash.png'
import clothesUrl from '../assets/3.clothes.png'
import yourEcoActionUrl from '../assets/8.yourEcoAction.png'
import bottleUrl from '../assets/5.bottle.png'
import homeUrl from '../assets/6.home.png'
import plantUrl from '../assets/7.plant.png'
import ecoFoodUrl from '../assets/9.ecoFood.png'
import {useContext} from 'react'
import { ProgressContex} from '../context/ProgressContex';
import { useState } from 'react';

export const Tiles = () =>{

    const {progressLevel, setProgressLevel} = useContext(ProgressContex)

    const [buttons, setButtons] = useState([
        {id: 1, title: 'Garbage segregation', isDisabled: false, alt: 'trash image', src: trashUrl},
        {id: 2, title: 'Do not use plastic bags', isDisabled: false, alt: 'trash image', src: ecoShoppingUrl},
        {id: 3, title: 'Use eco clothes', isDisabled: false, alt: 'trash image', src: clothesUrl},
        {id: 4, title: 'Use public transport', isDisabled: false, alt: 'trash image', src: busUrl},
        {id: 5, title: 'Garbage You eco action', isDisabled: false, alt: 'trash image', src: yourEcoActionUrl},
        {id: 6, title: 'Use reusable dishes', isDisabled: false, alt: 'trash image', src: bottleUrl},
        {id: 7, title: 'Eco dom', isDisabled: false, alt: 'trash image', src: homeUrl},
        {id: 8, title: 'To plant plants', isDisabled: false, alt: 'trash image', src: plantUrl},
        {id: 9, title: 'Buy eco food', isDisabled: false, alt: 'trash image', src: ecoFoodUrl}
    ])

    const toggleTodo = (id)=>{
        setButtons (buttons.map(button => {
            if(button.id === id){
                button.isDisabled = !button.isDisabled
            }
            return button
        }))
     }
    
     const addPoints = () =>{
         setProgressLevel(progressLevel + 1)
         console.log(progressLevel)
     }
     const allFunction = (id)=>{
         addPoints();
         toggleTodo(id)
     }

    return(
        <>
        < div className='body-tabel'>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px', gridGap: '15px'}}>
                {
                    buttons.map(button=>
                        button.isDisabled
                        ?<button className="tiles tiles-shadow" key={button.id} onClick={()=> allFunction(button.id)} disabled={button.isDisabled}>
                            {<img className='tiles-img' alt={button.alt} src={button.src} />}
                        </button>
                        :
                            <button className="tiles tiles-btn " data-title={button.title} key={button.id} onClick={()=> allFunction(button.id)} disabled={button.isDisabled}>
                            {<img className='tiles-img' alt={button.alt} src={button.src} />}
                        </button>
                        
                        
                        
                    )
                } 
            </div>
        </div>
        </>
    )
}

