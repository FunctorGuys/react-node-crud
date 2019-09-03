import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserLayout } from 'components/layouts';
import { NotFound } from 'elements/statics';

const DashboardPage = lazy(() => import('./dashboard'));
const ProfilePage = lazy(() => import('./profile'));

export default function UserPage({ match }) {
  return (
    <UserLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={`${match.path}/dashboard`} component={DashboardPage} />
          <Route exact path={`${match.path}/profile`} component={ProfilePage} />
          <Route exact path={`${match.path}`} component={DashboardPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </UserLayout>
  );
}
