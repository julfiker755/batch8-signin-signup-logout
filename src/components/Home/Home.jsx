import React, { useContext } from 'react';
import { Authinfo } from '../../provider/Authcontext/Authcontext';

const Home = () => {
    const authinfo=useContext(Authinfo)
    console.log(authinfo)
    return (
        <div>
            <h1>Hello,I am home jsx</h1>
        </div>
    );
};

export default Home;