import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name,image,job,text}=people[index]
  const checkNumber=(num)=>{
    if (num>people.length-1) {
      return 0
      
    }
    if (num<0) {
      return people.length-1
      
    }
    return num
  }
  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex=index+1;
      return  checkNumber (newIndex)

    })
  }
  const prevPerson=()=>{
    setIndex((index)=>{
      let newIndex=index-1;
      return checkNumber (newIndex)

    })
  }
  const randomPerson=()=>{ 
    let number =Math.floor(Math.random()*people.length);
    if (number===index) {
      return setIndex(checkNumber( number+1) )
    }
    setIndex( number)
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
      <span  className='quote-icon'> < FaQuoteRight /></span>
      </div><h2 className="author">{name}</h2>
        <p className='job'>{job}</p>
        <p className="info">{text}</p>
      <div className='btn-container'>
        <button className="prev-btn" onClick={prevPerson}>
        < FaChevronLeft />
        </button> <button className="next-btn" onClick={nextPerson}>
        < FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>suprise me</button>
    </article>
  )
};

export default Review;
