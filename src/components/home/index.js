import { useContext } from 'react'

import { Wrapper } from '../wrapper/index'
import { ProgressBar } from '../progressBar/Index'
import { Tiles } from '../tiles/Tiles'
import { UserActivity } from '../../controllers/user-activity/index'

export const Home = () => {

    const { userActivity, setUserActivity } = useContext(UserActivity)

    return <Wrapper>
        <Tiles />
        <ProgressBar progressLevel={2} />
    </Wrapper>
}