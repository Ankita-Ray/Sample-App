import React, { useEffect, useState } from 'react';
import { PostsApiUrl } from '../../../ApiEndpoints';
import Card from '../../components/Card/index';
import './posts_gallery_module_style.css';


function Posts() {
    
    const [posts, setPosts] = useState([
        {
            title: 'Lorem ipsum dolor sit amet .',
            body: " Consequuntur similique, hic cumque, cum accusantium tempora reiciendis voluptate, ipsam quis vero deleniti excepturi suscipit quo voluptatibus magnam officiis aperiam sequi? Enim."
        },
        {
            title: 'Lorem ipsum dolor sit amet .',
            body: " Consequuntur similique, hic cumque, cum accusantium tempora reiciendis voluptate, ipsam quis vero deleniti excepturi suscipit quo voluptatibus magnam officiis aperiam sequi? Enim."
        },
        {
            title: 'Lorem ipsum dolor sit amet .',
            body: " Consequuntur similique, hic cumque, cum accusantium tempora reiciendis voluptate, ipsam quis vero deleniti excepturi suscipit quo voluptatibus magnam officiis aperiam sequi? Enim."
        },
        {
            title: 'Lorem ipsum dolor sit amet .',
            body: " Consequuntur similique, hic cumque, cum accusantium tempora reiciendis voluptate, ipsam quis vero deleniti excepturi suscipit quo voluptatibus magnam officiis aperiam sequi? Enim."
        }
     ]);
   
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
            <div className='posts-card-container'>
                {
                    posts.map((items,index) => {
                
                    return <Card     
                                    height='6rem'
                                    width='70%'
                                    fontSize='18px'
                                    backgroundColor='rgba(221, 190, 174, 0.408)'
                                    key={index}
                    >
                        <div style={{flexDirection:'column'}}>
                            <div style={{marginBottom:15}}>{index+1}.hi</div>
                                 
                             <div className="post-gallery-body-text" >{items.body}</div>
                                
                        </div>
                                    
                        
                            </Card>
                    }
                    )
                }
            </div>
            :
            null


    )
}

export default Posts
