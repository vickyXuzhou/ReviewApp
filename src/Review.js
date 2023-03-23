import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review=()=>{

      const[index,setIndex] = useState(0)
      const{name,job,image,text} = people[index]


     
      function checkArrLimit(number){
        if(number>people.length-1){
          return 0
        }
        if(number<0){
          return(people.length-1)
        }
        else{
          return(number)
        }
      }

      function surpriseFunc(){
        let randNum = Math.floor(Math.random()*people.length)
        setIndex(index=>{
          if(randNum===index){
            randNum=index+1
          }
          return (checkArrLimit(randNum))
        })
      }

      function prevFunc(){
        setIndex(item=>{
          let index = item-1
          return(checkArrLimit(index))
        })
      }

      function nextFunc(){
        setIndex(prev=>{
          let index = prev+1
          return(checkArrLimit(index))
        })
      }
      // console.log(name)
      return(
        <article className='review'>
        <div className='img-container'>
        <img src={image} alt='' className='person-img'/>
        <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
        <div className='button-container'>
        <button className='prev-btn'
      onClick={prevFunc}
        >
            <FaChevronLeft/>
          </button>
          <button className='next-btn'
          onClick={nextFunc} 
            >
            <FaChevronRight/>
          </button>
        </div>
        <button className='random-btn' onClick={surpriseFunc}>suprise me</button>
        </article>
      )
}

export default Review;


