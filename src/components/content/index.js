
import { Switch, Route} from 'react-router-dom';
import { ContentStyle } from './styled';
import { Home } from '../home/index';
import { History } from '../history/History';
import { EcoActions } from '../ecoActions/EcoActions';
import {Profile} from '../myAccount/myAccount';

export const Content = () => (
    <Switch>
         <Route path='/' exact>
            <ContentStyle>
                <Home />
            </ContentStyle>
        </Route>
        <Route path="/history">
            <History/>
        </Route>
        <Route path="/eco-actions">
            <EcoActions/>
        </Route>
        <Route path="/my-account">
            <Profile/>
        </Route>
    </Switch>

)

