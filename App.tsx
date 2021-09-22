import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import User from './pages/Profile/User';
import StudentDetails from './pages/Profile/StudentDetails';
import ParentDetails from './pages/Profile/ParentDetails';
import GuardianDetails from './pages/Profile/ParentDetails';
import Documents from './pages/Profile/ParentDetails';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/home"> <User /></Route>
        <Route exact path="/student-details/:studentId"><StudentDetails /></Route>
        <Route exact path="/parent-details/:parentId"><ParentDetails /></Route>
        <Route exact path="/guardian-details/:guardianId"><GuardianDetails /></Route>
        <Route exact path="/documents/:documentId"><Documents /></Route>
        <Route path="/login" component={Login} > <Login />  </Route>
        <Route path="/changepassword" component={ChangePassword} > <ChangePassword /> </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;



