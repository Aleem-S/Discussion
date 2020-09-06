
import React, { Component } from 'react';
import Discussion from './Discussion'
import PinnedPosts from './PinnedPosts'



import './Discussion.scss';

class Home extends Component {

    render() {
        return (
            <div className='container'>
                <div className='left_container'>
                <PinnedPosts></PinnedPosts>
                </div>
                <div className='right_container'>
                <Discussion></Discussion>
                </div>
            </div>


        )
    }
}

export default Home;