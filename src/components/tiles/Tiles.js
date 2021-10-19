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
import { useEffect, useState, useContext } from 'react'
import { getCurrentDate } from '../../controllers/get-date/getDate'
import { DATABASE_URL } from '../../firebase-config'
import { loadDateActivity, sendDataActivity } from '../services';
import { ProgressContex } from '../context/ProgressContex';
import { totalCount } from '../../controllers/user-activity';

export const Tiles = () => {

    const {setProgressLevel} = useContext(ProgressContex)
    const [activity, setActivity] = useState({})

    const currentDate = getCurrentDate();

    const [buttons, setButtons] = useState([
        { id: 1, title: 'Garbage segregation', ecoAction: 'segregation', isDisabled: false, alt: 'trash image', src: trashUrl },
        { id: 2, title: 'Do not use plastic bags', ecoAction: 'bags', isDisabled: false, alt: 'trash image', src: ecoShoppingUrl },
        { id: 3, title: 'Use eco clothes', ecoAction: 'clothes', isDisabled: false, alt: 'trash image', src: clothesUrl },
        { id: 4, title: 'Use public transport', ecoAction: 'transport', isDisabled: false, alt: 'trash image', src: busUrl },
        { id: 5, title: 'Garbage You eco action', ecoAction: 'action', isDisabled: false, alt: 'trash image', src: yourEcoActionUrl },
        { id: 6, title: 'Use reusable dishes', ecoAction: 'dishes', isDisabled: false, alt: 'trash image', src: bottleUrl },
        { id: 7, title: 'Eco dom', ecoAction: 'home', isDisabled: false, alt: 'trash image', src: homeUrl },
        { id: 8, title: 'To plant plants', ecoAction: 'plants', isDisabled: false, alt: 'trash image', src: plantUrl },
        { id: 9, title: 'Buy eco food', ecoAction: 'food', isDisabled: false, alt: 'trash image', src: ecoFoodUrl }
    ])

    const toggleTodo = (id) => {
        setButtons(buttons.map(button => {
            if (button.id === id) {
                button.isDisabled = !button.isDisabled
                setActivity({[button.ecoAction] : true, ...activity})
            }
            return button
        }))
    }

    const allFunction = (id) => {
        toggleTodo(id)
    }

    useEffect(()=>{
        const activityLevel = totalCount(activity)
        setProgressLevel(activityLevel)
        const dateActivity = {...activity, total:activityLevel}
        sendDataActivity(DATABASE_URL,currentDate,dateActivity)
    },[activity])

    useEffect(()=>{
        loadDateActivity(DATABASE_URL,currentDate)
        .then(r => r.json())
        .then(data => {
            if (data) {
                const { total, ...rest } = data
                const formatActivity = Object.entries(rest)
                formatActivity.map(action => {
                    if (action[1] === true) {
                        buttons.map(button => {
                            if (button.ecoAction === action[0]) {
                                button.isDisabled = true
                            }
                        })
                    }
                })
                setActivity(rest)
            } else {
               buttons.map(button => button.isDisabled = false)
            }
        })
    },[])


    return (
        <>
            < div className='body-tabel'>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px', gridGap: '15px' }}>
                    {
                        buttons.map(button =>
                            button.isDisabled
                                ? <button className='tiles tiles-shadow' key={button.id} onClick={() => allFunction(button.id)} disabled={button.isDisabled}>
                                    {<img className='tiles-img' alt={button.alt} src={button.src} />}
                                </button>
                                :
                                <button className="tiles tiles-btn " data-title={button.title} key={button.id} onClick={() => allFunction(button.id)} disabled={button.isDisabled}>
                                    {<img className='tiles-img' alt={button.alt} src={button.src} />}
                                </button>
                        )
                    }
                </div>
            </div>
        </>
    )
}

