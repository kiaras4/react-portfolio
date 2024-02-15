import { useEffect, useState } from 'react'
import pic1 from '../../assets/images/soccer.png'
import pic2 from '../../assets/images/Pumba.png'
import pic3 from '../../assets/images/iris.png'
import pic4 from '../../assets/images/soccer1.png'
import pic5 from '../../assets/images/bun1.png'
import pic6 from '../../assets/images/bun2.png'




import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

 /* useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
*/
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          My name is Kiara Smith and I am from Roper, NC. I am a freshman
            at UNC Chapel Hill majoring in Computer Science and Business. I am hoping to pursue a career as 
            a software engineer while also running Airbnbs and other short-term rentals. I currently have my NC real estate 
            license and plan to work part-time as an agent next year.
          </p>
          <p align="LEFT">
          My favorite pastime during a normal day is to go to the gym and read. 
                    My favorite genres are historical fiction and fantasy. When I can, I also love 
                    to figure skate and play soccer. Outside of sports and school, I love animals. I have a dog named
                    Iris and a cat named Pumba. Before college,
                    I raised chickens and rabbits for show. It was fun and I learned a lot about responsibility, time 
                    management, and how to earn and budget money to afford everything for the shows.  
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={pic1}/>
            </div>
            <div className="face2">
            <img src={pic2}/>
            </div>
            <div className="face3">
            <img src={pic3}/>
            </div>
            <div className="face4">
            <img src={pic4}/>
            </div>
            <div className="face5">
            <img src={pic5}/>
            </div>
            <div className="face6">
            <img src={pic6}/>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
