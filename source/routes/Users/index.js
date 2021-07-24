import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useHistory } from 'react-router';
import { UsersApiUrl } from '../../../ApiEndpoints';
import Card from '../../components/Card/index';
import CardContainer from '../../components/CardContainer/index';
import './users_module_style.css';


function Users() {
    const history = useHistory();
    const [users, setUsers] = useState("");
    useEffect(() => {
        fetch(UsersApiUrl)
            .then(response => response.json())
            .then(json => {
                setUsers(json);

            })
    }, [])
    
    return (

             
            users.length > 0
            ?
            <CardContainer>
                {
                    users.map(
                        (items, index) => {
                
                            return <Card     
                                            height='2rem'
                                            width='90%'
                                            fontSize='18px'
                                            backgroundColor='rgba(221, 190, 174, 0.408)'
                                            key={index}
                                            alignItems="center"
                                            onClick={()=>history.push(`/users/${items.name}/posts`,{userId:items.id,userName:items.name})}
                                    >
                                        <div className="user-name-container">
                                            <div className="user-name-text">{index+1}. {items.name}</div>
                                    
                                            <div className="view-post-text-div" > View posts{'->'}</div>
                                        </div>
                                
                                    </Card>
                        }
                    )
                }
                
                <p style={{ textAlign: "left" }}>&#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;&nbsp;</p>

            </CardContainer>
            :
            <ActivityIndicator/>


    )
}

export default Users
