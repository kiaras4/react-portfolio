import { useEffect, useState } from 'react'
import jack from '../../assets/images/jack.png'

import pic2 from '../../assets/images/Pumba.png'
import pic3 from '../../assets/images/iris.png'
import pic4 from '../../assets/images/soccer1.png'
import pic5 from '../../assets/images/bun1.png'
import pic6 from '../../assets/images/bun2.png'




import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const FunFacts = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

 /* useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
*/
  return (
    <>
      <div className="container funfacts-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['F', 'u', 'n', ' ', 'F', 'a', 'c', 't','s', '!']}
              idx={15}
            />
          </h1>
          <p>
          * McDonald's in Berlin, Germany has ~real~ food. Very yummy.
          </p>
          <p align="LEFT">
          * ^^In the Philippines, McDonald's serves spaghetti. So basically, the US has the 
          worst pick of McDonald's.
          </p>
          <p align="LEFT">
          * Capybara's are the key to happiness. Trust. 
          </p>
          <p align='LEFT'>
          * I once won a chess tournament in 3rd grade. 
          </p>
          <p align='LEFT'>
          * We're more creative in the shower #shower thoughts
          </p>
          <p align='LEFT'>
          * Jack doesn't wear shoes 
          </p>
          <p align='LEFT'>
          * Jack is also very nice, despite bullying me with discrete.
          </p>
        </div>
        <div className='text-zone2'>
          <h2 align="RIGHT">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'n', 'c', 'o', 'u', 'r', 'a', 'g','i','n', 'g',' ', 'w','o','r','d','s', ' ', 'f','r','o','m',' ','**','J','a','c','k','**']}
              idx={15}
            />
          </h2>
          <div className="stage-cube-cont">
              <img src={jack}/>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}


export default FunFacts