import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './source/components/Layout/index';
import Error404 from './source/routes/Error404';
import PostDetails from './source/routes/PostDetails/index';
import PostGallery from './source/routes/PostGallery/index';
import Users from './source/routes/Users/index';

export default function App() { 

  return (
     
    <BrowserRouter>
     <Switch>
                                    
        <Route exact  path='/'>
           <Layout body={<Users />} title="users"/> 
        </Route> 

        <Route exact path='/users/:userName/posts'>
          <Layout body={<PostGallery />} title="posts"/>
        </Route>

        <Route exact path={`/users/:userName/:postId/postDetails`}>
          <Layout body={<PostDetails />} title="postdetails"/>
        </Route>
       
        
        <Route component={Error404} /> 

      </Switch>
     </BrowserRouter>
       
  );
}

 