import React from 'react'
import {Route,Routes} from "react-router-dom";
import PostContainer from './PostContainer';

export const Router = () => {
    return (
        <Routes>
            {/* <AuthenticatedRoute path="/post" element={ <PostContainer />} /> */}
            <Route path="/post" element={ <PostContainer />} />  
            <Route path="/test" element={ <h1>hello</h1>} />

        </Routes>
    )
}
