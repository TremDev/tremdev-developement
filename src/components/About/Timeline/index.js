import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Mousewheel, Pagination, Autoplay } from 'swiper'

import './index.scss'

import AnimatedLetters from '../../AnimatedLetters'

import { useEffect, useState } from 'react'
import axios from 'axios'

const Timaline = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [posts, setPosts] = useState([])
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    axios.get('https://portfolio-tremdev-default-rtdb.europe-west1.firebasedatabase.app/posts.json').then(data => {
if(counter === 1){      let dataTransformedToArray = Object.entries(data.data)
     let dataToPush = []
     dataTransformedToArray.forEach(element => {
       let elemeToPush = {}
       elemeToPush.id = element[0]
       elemeToPush.title = element[1].title
       elemeToPush.link = element[1].link
       elemeToPush.imageLink = element[1].imageLink
       elemeToPush.description = element[1].description
       console.log(element)
       dataToPush.push(elemeToPush)
     });

     setPosts(dataToPush)
     console.log(posts)}
      setCounter(2)
    })
  })
  return (
    <>
      <div className="lopoticontainer">
        <div className="swiper-container">
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            mousewheel={true}
            modules={[Mousewheel, Pagination, EffectFade, Autoplay]}
            effect={'fade'}
            className="mySwiper"
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
          >
        {posts.map((post, index) => (
        <SwiperSlide key={post} virtualIndex={index} className="swiper-slide">
              <div className="port-img">
                <img src={post.imageLink}  alt={post.title + ' - Projet - Trem Dev - Front End'} />
              </div>
              <div className="bg"></div>
              <div className="inner">
                <h1>                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={Object.assign([], post.title)}
                    idx={15}
                  /></h1>
                <p>
                    {post.description}
                </p>
                <div>
                <a href={post.link} className="that-flat-button">
                    Watch More
                  </a>
                </div>
              </div>
            </SwiperSlide>
      ))}

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Timaline
