import { DATABASE_URL } from '../../firebase-config'

export const UsersActivityProvider = ({ children }) => {

    fetch(`${DATABASE_URL}/usersActivity.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            formattedData.map((usersActivity) => {
                return console.log(usersActivity.id)
            })
        })
    return <>
        {children}
    </>
}