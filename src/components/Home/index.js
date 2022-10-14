import { Link } from 'react-router-dom';
import './index.scss'
import LogoTitle from '../../assets/images/logo/logo.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

// import { Dna } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['T','r','e','m','D','e','v'];
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    }, [])
    
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>                
                <br/>
                    <span className={`${letterClass} _13`}>I</span>   
                    <span className={`${letterClass} _14`}>'m</span>   
                    <img src={LogoTitle} alt="Logo - Trem Dev - Front End Developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Frontend Developer</h2>
                <Link to='/contact' className="flat-button">Contact Me</Link>
            </div>
            <Logo />
        </div>
        {/* <Dna
//   visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/> */}
        </>
    );
}

export default Home