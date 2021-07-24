import React from 'react';
import Layout from './source/components/Layout/index';
// import Users from './source/routes/Users/index';
import PostGallery from './source/routes/PostGallery/index';


export default function App() {
  return (
    <section>
      {/* <Layout body={<Users />} title="users"/> */}
     <Layout body={<PostGallery />} title="posts"/>
    </section>
     
       
  );
}

 