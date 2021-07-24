import React, { useEffect, useState } from 'react';
import { UsersApiUrl } from '../../../ApiEndpoints';
import Card from '../../components/Card/index';
import './users_module_style.css';


function Users() {

    const [users, setUsers] = useState([{name:'Anki'},{name:'Ray'},{name:'Anki'},{name:'Ray'},{name:'Anki'},{name:'Ray'},{name:'Anki'},{name:'Ray'}]);
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
            <div className='users-card-container'>
                {
                    users.map((items,index) => {
                
                    return <Card     
                                    height='2rem'
                                    width='70%'
                                    fontSize='18px'
                                    backgroundColor='rgba(221, 190, 174, 0.408)'
                                    key={index}
                                    alignItems="center"
                            >
                                <div  style={{flexDirection:'row',display:'flex',width:'100%',justifyContent:'space-between'}}>
                                    <div>{index+1}. {items.name}</div>
                            
                                    <div className="view-post-text-div" > View posts{'->'}</div>
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

export default Users
