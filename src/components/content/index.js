
import { Switch, Route} from 'react-router-dom';
import { ContentStyle } from './styled';
import { Home } from '../home/index';
import { History } from '../history/History';
import { EcoActions } from '../ecoActions/EcoActions';
import { EventDetails } from '../ecoActions/addForm/eventDetails';


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
        <Route exact path="/eco-actions">
            <EcoActions/>
        </Route>
        <Route path='/eco-actions/:id'>
            <EventDetails/>
        </Route>
    </Switch>

)

