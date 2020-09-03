import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Calllog = lazy(() => import('./calllog/calllog'));

const Exports = lazy(() => import('./exports/exports'));

const Integrate = lazy(() => import('./integrate/integrate'));

const Videocall = lazy(() => import('./videocall/videocall'));

const Contacts = lazy(() => import('./contacts/contacts'));

const Analytics = lazy(() => import('./analytics/analytics'));

const Expandrow=lazy(()=>import('./expandrow/expandrow'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/calllog" component={ Calllog } />

          <Route path="/exports" component={ Exports } />

          <Route path="/integrate" component={ Integrate } />

          <Route path="/videocall" component={ Videocall } />

          <Route path="/contacts" component={ Contacts } />

          <Route path="/analytics" component={ Analytics } />

          <Route path="/expandrow" component={ Expandrow } />
          
          <Redirect to="/calllog" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;