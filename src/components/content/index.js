import { Switch, Route } from 'react-router-dom';

import { ContentStyle } from './styled';

import { Home } from '../home/index';


export const Content = () => (
    <Switch>
        <Route path='/'>
            <ContentStyle>
                <Home />
            </ContentStyle>
        </Route>
    </Switch>
)