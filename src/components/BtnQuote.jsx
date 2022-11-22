import React  from 'react'

const BtnQuote = ({objStyleBtn,handleClik}) => {
    return(
        <button style={objStyleBtn} className='card__btn' onClick={handleClik}>pasar</button>
    )
}

export default BtnQuote
