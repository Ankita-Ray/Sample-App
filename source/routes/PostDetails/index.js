import { MaterialCommunityIcons } from '@expo/vector-icons';
import { default as React, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { CommentsApiUrl } from '../../../ApiEndpoints';
import CardContainer from '../../components/CardContainer/index';
import Divider from '../../components/Divider';
import './postDetails_module_style.css';


function PostDetails() {
    const location = useLocation();
     
    const [comments, setComments] = useState("");
   
    useEffect(() => { 
        fetch(CommentsApiUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setComments(json);

            })
    }, [])
    
    return (

             
            comments.length > 0
            ?
            <CardContainer>
               
                <PostTitle/>
                <PostBody/>
                <Divider />
                <CommentHeader />
                {
                    comments.filter((items) => items.postId == location.state.postId).map(
                       (items, index) => {
                        
                        return (
                            <div key={index} className="comment-box">

                                <p aria-label="comment-body" className="margin-zero" style={{ marginBottom: '3%' }}>
                                    {items.body}
                                </p>
                                
                                <div className="commenter-details-container">
                                    <div className="commenter-name-text">
                                            <h5  className="margin-zero">by( {items.name} )</h5>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <MaterialCommunityIcons
                                            name="email"
                                            size={20}
                                            color={'rgb(83,72,59)'}
                                            onPress={(e) => {
                                                window.location = `mailto:${items.email}`;
                                                e.preventDefault();
                                            }}
                                        />
                                            
                                    </div>
                                    
                                </div>
                        </div>
                        
 
                        )
                      }
                   )
                  
                }
                
               
                <p style={{ textAlign: "left" }}>&#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;&nbsp;</p>

            </CardContainer>
            :
            null


    )
}

export default PostDetails;

const PostTitle = () => {
    const location = useLocation();
   return <div className="post-title-container">
                    <h2 className="margin-zero post-details-title" >{location.state.title}</h2>
                    <h4 className="post-author">
                       ( 
                        <span style={{ fontWeight: 400 }}> by </span>
                        {location.state.userName} 
                          )
                    </h4>
                    
                </div>
         
}


const PostBody = () => {
    const location = useLocation();
    return (
        <div className="post-body-text" >
                    <p dangerouslySetInnerHTML={ {__html: `<p>${location.state.body}</p>`} }/> 
        </div>
              
    )
}

const CommentHeader = () => {
    return (
       <h4 style={{ alignSelf: 'start' }}>Comments (5)</h4>
    )
}

 
