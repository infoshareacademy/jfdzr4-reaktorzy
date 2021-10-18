export const loadDateActivity =(DATABASE_URL,currentDate) =>{
    return fetch(`${DATABASE_URL}/users/id1/${currentDate}.json`)
}

export const sendDataActivity = (DATABASE_URL,currentDate,dateActivity) => {
    fetch(`${DATABASE_URL}/users/id1/${currentDate}.json`, {
        method: 'PUT',
        body: JSON.stringify(dateActivity)
    })
}