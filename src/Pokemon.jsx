import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import pokemonLogo from "./images/pokemonlogo.png"
const Pokemon = () => {
    const [num, setNum] = useState(1)
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [moves, setMoves] = useState()
    const [moveName, setMoveName] = useState()
    const [movesNum, setMovesNum] = useState([])
    const [movesNumVal, setMovesNumVal] = useState(0)
    useEffect(() => {
        const getData = async () => {
            let fetchData = `https://pokeapi.co/api/v2/pokemon/${num}`
            const res = await axios.get(fetchData)
            const { name, sprites: { front_default }, moves, weight, height } = res.data
            setImg(front_default)
            setName(name)
            setHeight(height)
            setWeight(weight)
            setMoves(moves.length)
            setMoveName(moves[movesNumVal].move.name)
            setMovesNum(moves)
        }
        getData()
    })
    let opt = []
    for (let i = 1; i <= 500; i++) {
        opt.push(i)
    }
    return (
        <>
            <img className="logo" src={pokemonLogo} alt="pokemonlogo.png" />
            <div className="main">
                <div className="select">
                    <label>select your <span className="pokemon">pokemon</span> </label>
                    <select value={num} onChange={(e) => {
                        setNum(e.target.value)
                    }}>
                        {
                            opt.map((val, index) => <option value={val} key={index + 1}> {val}</option>)
                        }
                    </select>

                    <label>select your <span className="move">move</span></label>
                    <select value={movesNumVal} onChange={(e) => {
                        setMovesNumVal(e.target.value)
                    }}>
                        {
                            movesNum.map((val, index) => <option value={index} key={index + 1}> {index + 1}</option>)
                        }

                    </select>
                </div>
                <Card
                    name={name}
                    moves={moves}
                    moveName={moveName}
                    img={img}
                    weight={weight}
                    height={height}
                />
            </div>
        </>
    )
}
export default Pokemon