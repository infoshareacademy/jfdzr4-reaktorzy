import { Switch, Route } from 'react-router-dom';

import { ContentStyle } from './styled';

import { Home } from '../home/index';

import { UsersActivityProvider } from '../../controllers/user-activity/index'


export const Content = () => (
    <Switch>
        <UsersActivityProvider>
            <Route path='/'>
                <ContentStyle>
                    <Home />
                </ContentStyle>
            </Route>
        </UsersActivityProvider>
    </Switch>
)