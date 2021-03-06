import React, { useEffect } from 'react'
// Components
import Game from "../components/Game"
import GameDetail from '../components/GameDetail';
// Style and Animation
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
// REDUX
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"
// react router dom
import { useLocation } from "react-router-dom"

const Home = () => {
    // get the current location
    const location = useLocation();
    console.log(location)
    const pathId = location.pathname.split("/")[2];
    console.log(pathId);
    // FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // Get that data back
    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games)
    return (
        <GameList>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
                {searched.length ? (
                    <div className='searched'>
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map(game => (
                                <Game name={game.name} released={game.released} id={game.id} key={game.id}
                                    image={game.background_image} />
                            ))}
                        </Games>
                    </div>
                ) : ''}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} key={game.id}
                            image={game.background_image} />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} key={game.id}
                            image={game.background_image} />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} key={game.id}
                            image={game.background_image} />
                    ))}
                </Games>
            </AnimateSharedLayout>

        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
    grid-column-gap:3rem;
    grid-row-gap: 5rem;

`

export default Home;