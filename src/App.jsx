import { useState } from 'react'
import quotes from './json/quote.json'
import QuoteBox from './components/QuoteBox'
import colors from './json/colors.json'


function App() {


  const getRandomFromArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random())

    return arr[indexRandom]
    
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))
  
  
    const handleClik = () => {
      setQuoteRandom(getRandomFromArray(quotes))
      setColorRandom(getRandomFromArray(colors))
    }

    const objStyle = {
      backgroundColor: colorRandom
    }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox quoteRandom={quoteRandom}
      handleClik={handleClik}
      colorRandom={colorRandom}
      />
        
    </div>
  )
}

export default App
