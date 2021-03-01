import React, { Component, useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { robots } from '../components/robots'
import Scroll from '../components/Scroll'


export default function App() {

    const [searchfield, setSearchfield] = useState('')
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    } 
 
    return (
        <div className ='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobots} />
            </Scroll>
        </div>
    )
}
