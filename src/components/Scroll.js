import React from 'react'

const Scroll = (props) => {
    return (
        <div className='scroll' style={{overflowY: 'scroll', overflowX:'auto', border: '5px solid black', height: '650px'}}>
            {props.children}
        </div>
    )
}

export default Scroll
