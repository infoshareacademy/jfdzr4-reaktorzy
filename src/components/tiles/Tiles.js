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

export const Tiles = () =>{


    return(
        < div className='body-tabel'>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px', gridGap: '15px'}}>
            
                <div className="tiles btn" data-title='Garbage segregation'>
                    <img className='tiles-img'  alt="trash image" src={trashUrl} />
                </div>

                <div className="tiles btn" data-title='Do not use plastic bags' >
                    <img className='tiles-img' alt="ecoShopping image" src={ecoShoppingUrl}  />
                </div>''
                <div className="tiles btn" data-title='Use eco clothes'>
                    <img className='tiles-img' alt="clothes image" src={clothesUrl} />
                </div>  
                <div className="tiles btn" data-title='Used public transport'>
                    <img className='tiles-img' alt="bus image" src={busUrl} />
                </div>
                <div className="tiles btn" data-title='You eco action'>
                    <img className='tiles-img' alt="yourEcoAction image" src={yourEcoActionUrl} />
                </div>
                <div className="tiles btn" data-title='User reusable dishes' >
                    <img className='tiles-img' alt="bottleUrl image" src={bottleUrl} />
                </div>  
                <div className="tiles btn" data-title='Eco dom'>
                    <img className='tiles-img' alt="homeUrl image" src={homeUrl} />
                </div>
                <div className="tiles btn" data-title='To plant plants'>
                    <img className='tiles-img' alt="plantUrl image" src={plantUrl} />
                </div>
                <div className="tiles btn" data-title='Buy eco food'>
                    <img className='tiles-img' alt="ecoFoodUrl image" src={ecoFoodUrl}/>
                </div>  

            </div>
        </div>
    )
}

