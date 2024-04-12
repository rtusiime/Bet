import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from '../assets/more.png'
import { Link } from 'react-router-dom'
import supabase from '../client'



const Card = (props) => {

  const [count, setCount] = useState(props.betCount);

  const updateCount = async (event) => {
    event.preventDefault();

    setCount((count) => {

      const newCount = count + 1
      const updateDb = async () => {
        const { data, error } = await supabase
          .from('Posts')
          .update({ betCount: newCount })
          .eq('id', props.id);

        if (error) {
          console.log(error);
        }
      }
      updateDb();
      return newCount;
    });

  }

  return (
    <div className="Card">
      <Link state={props} to={'edit/' + props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
      <h2 className="title">{props.title}</h2>
      <h3 className="author">{"by " + props.author}</h3>
      <p className="description">{props.description}</p>
      <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
    </div>
  );
};

export default Card;