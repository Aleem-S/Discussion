
import React from 'react';

import classes from './Forum.module.css'

const Post = (props) => (
    <div className={classes.post} id={props.key}>
        <div className={classes.heading}>
            <div className={classes.left_section}>{props.poster}</div>
            <div className={classes.middle_section}>{props.subject}</div>
            <div className={classes.right_section}>{props.date}</div>
        </div>
        <div className={classes.body}>
            {props.children}
        </div>
        <div className={classes.post_footer}><a href="javascript:void(0)">Report</a><a href="javascript:void(0)">Reply</a><a href="javascript:void(0)">Like (45)</a><a href="javascript:void(0)">Pin</a></div>
    </div>
);

export default Post;