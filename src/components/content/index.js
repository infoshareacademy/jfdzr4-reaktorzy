
import { Switch, Route} from 'react-router-dom';
import { ContentStyle } from './styled';
import { Home } from '../home/index';
import { History } from '../history/History';
import { EcoActions } from '../ecoActions/EcoActions';
import { EventDetails } from '../ecoActions/eventDetails/index';

import { SignIn, SignUp } from '../sign';
import './style.css'
import { Profile } from '../profile/index';

export const Content = () => (
    <div className={'content__wrapper'}>
        <Switch>
            <Route path='/' exact>
                <ContentStyle>
                    <Home />
                </ContentStyle>
            </Route>
            <Route path="/history">
                <History/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route exact path="/eco-actions" component={EcoActions}/>
            <Route path='/eco-actions/:id' component={EventDetails} />
            <Route path="/sign-in">
                <SignIn/>
            </Route>
            <Route path="/sign-up">
                <SignUp/>
            </Route>
        </Switch>
    </div>
)

