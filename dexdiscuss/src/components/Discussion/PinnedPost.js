
import React from 'react';

import classes from './Forum.module.css'

const PinnedPost = (props) => (
    <div className={classes.pinned_post} id={props.key}>
        <div className={classes.heading}>
            <div className={classes.left_section}>{props.poster}</div>
            <div className={classes.right_section}>{props.date}</div>
            <div className={classes.subject_line}>{props.subject}</div>
            
        </div>
        <div className={classes.body}>
            {props.children}
        </div>
        <div className={classes.post_footer}><a href="javascript:void(0)">Like (23)</a><a href="javascript:void(0)">Unpin</a></div>
    </div>
);

export default PinnedPost;