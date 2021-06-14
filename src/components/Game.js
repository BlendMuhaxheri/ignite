import React from 'react'
// Style and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// REDUX
import { useDispatch } from 'react-redux'
import { loadDetail } from "../actions/detailAction"
// react router dom
import { Link } from "react-router-dom"
// utils
import { smallImage } from "../util"


const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString();
    // Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    }
    return (

        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>


    )
};

const StyledGame = styled(motion.div)`
min-height:30vh;
box-shadow:20px 5px 30px rgba(0,0,0,0.5);
text-align:center;
border-radius:0.4rem;
overflow:hidden;
cursor: pointer;
    img{
        width:100%; 
        height:40vh;
        object-fit:cover;
    }
`

export default Game;