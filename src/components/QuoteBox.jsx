import React from 'react'

const QuoteBox = ({quoteRandom,handleClik,colorRandom}) => {

    
    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = {
        backgroundColor: colorRandom
    }


    return(
        <article className='card' style={objStyle}>
            <p className='card__quote'>{quoteRandom.quote}</p>
            <h1 className='card__author'>{quoteRandom.author}</h1>
            <button style={objStyleBtn} className='card__btn' onClick={handleClik}>pasar</button>
        </article>

    )
}

export default QuoteBox