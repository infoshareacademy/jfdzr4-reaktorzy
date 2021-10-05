import { DATABASE_URL } from '../../firebase-config'

export const UsersActivityProvider = ({ children }) => {

    fetch(`${DATABASE_URL}/usersActivity`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })

    return <>
        {children}
    </>
}