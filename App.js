import React from 'react';
import {Route,Switch} from 'react-router-dom';

//import Members from './components/Members/Members';
import Layout from './hoc/Layout/Layout';
import MemberPage from './containers/MemberPage/MemberPage';
import DiscussionPage from './containers/DiscussionPage/DiscussionPage';
import ForumPage from './containers/ForumPage/ForumPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';

function App() {
  return (
    <div >
      <Layout>
        <Switch>
            <Route path="/members" component={MemberPage}/>
            <Route path="/discussion"  component={DiscussionPage}/>
            <Route path="/forum"  component={ForumPage}/>
            <Route path='/profilePage' component={ProfilePage}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
