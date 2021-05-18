import React from 'react';
import { userIdState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import NumberOfUpvotes from './SideUpvoteDownvoteBarComponents/NumberOfUpvotes'

const SideUpvoteDownvoteBar = ({ likes }) => {
    const [userId] = useRecoilState(userIdState);
    let typeOfLike = "none"
    let upvoteCount = 0

    console.log(likes)

    for (let i = 0; i < likes.length; i++) {
        if (likes[i].authorId === userId && likes[i].value === 1) {
            typeOfLike = "upvoted"
        }
        else if (likes[i].authorId === userId && likes[i].value === -1) {
            typeOfLike = "downvoted"
        }
    }

    for (let i = 0; i < likes.length; i++) {
        upvoteCount += likes[i].value
    }

    console.log(typeOfLike)
    console.log(upvoteCount)

    return (
        <div className="SideUpvoteDownvoteBar">
            <Upvote typeOfLike={typeOfLike}/>
            <NumberOfUpvotes upvoteCount={upvoteCount}/>
        </div>
    );
};

export default SideUpvoteDownvoteBar;