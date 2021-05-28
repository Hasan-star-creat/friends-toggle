import React from 'react';

const User = (props) => {
    const familiar = props.familiar
    return (
        <div>
             <h3>Greetings</h3>
             {
                 familiar 
                 ? <p>well-come, my friends</p> 
                 : <p>who the hell are you?</p>
             }
             <h2>Food</h2>
              {
                  familiar 
                  ? <p>I will buy food for you</p> 
                  :<p> Lets eat his his whose whose</p>
              }
              <h2>Connection</h2>
              {
                  familiar 
                  ? <p>Let's join my facebook</p> 
                  : <p>I don't add stranger</p>
              }
              
        </div>
    );
};

export default User;