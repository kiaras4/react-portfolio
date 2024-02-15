import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/LogoK.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['i', 'a', 'r', 'a']
    const jobArray = ['c','o','m','p','s','c','i',' ','m','a','j','o','r','.']
/*
    useEffect(() => {
        return setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)
    }, [])
*/

    return (
        <>
        <div className="container home-page">
            <div className="text-zone"> 
                <h1>
                <span className={letterClass}>H</span>
                <span className={'${letterClass} _12'}>i,</span>
                <br /> 
                <span className={'${letterClass} _13'}>I</span>
                <span className={'${letterClass} _14'}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />                
                </h1>
                <h2>Aspiring Software Engineer / Current Real Estate Agent</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home