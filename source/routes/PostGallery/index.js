import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useHistory, useLocation } from 'react-router';
import { PostsApiUrl } from '../../../ApiEndpoints';
import '../../../global_style.css';
import Card from '../../components/Card/index';
import CardContainer from '../../components/CardContainer/index';
import './posts_gallery_module_style.css';

function Posts() { 
    const location=useLocation();
    const history = useHistory();
    const [posts, setPosts] = useState("");
   
    useEffect(() => {
        fetch(PostsApiUrl)
            .then(response => response.json())
            .then(json => {
                setPosts(json);

            })
    }, [])
    
    return (

             
            posts.length > 0
            ?
            <CardContainer>
                
                <PostAuthorHeader />
                {
                    posts.filter((items)=> items.userId==location.state.userId).map((items,index) => {
                
                    return <Card     
                                    height='12rem'
                                    width='90%'
                                    fontSize='18px'
                                    backgroundColor='rgba(221, 190, 174, 0.408)'
                                    key={index}
                    >
                        <div style={{flexDirection:'column'}}>
                            <div className="post-title">
                                <h3 className="margin-zero ">{index + 1}. {items.title}</h3>
                            </div>
                                 
                            <div className="post-gallery-body-text" >
                                {items.body.slice(0, 80)}...
                            </div>
                            <button className="pointer-on-hover read-more-button"
                                    onClick={() => history.push(
                                                                    `/users/${location.state.userName}/postId=[${items.id}]/postDetails`,
                                                                    { postId: items.id, title: items.title, body: items.body, userName: location.state.userName }
                                                                )
                                            }
                                    >
                                Read More
                            </button>
                        </div>
                                    
                        
                    </Card>
                    }
                    )
                }
                <p style={{textAlign:"left"}}>&#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;&nbsp;</p>

            </CardContainer>
            :
            <ActivityIndicator/>


    )
}

export default Posts;

const PostAuthorHeader = () => {
    const location=useLocation();

    return (
        <div className="author-header">
                    <h2 className="margin-zero">Author - {location.state.userName}</h2>
        </div>
             
    )
}
