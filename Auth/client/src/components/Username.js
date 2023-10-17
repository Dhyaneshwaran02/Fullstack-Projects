import React from 'react';
import avatar from "../assets/avatar.jpg"
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';

export default function Username() {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div className={`${styles.gclass} w-full md:w-1/2 p-4`}>
        <div className='title flex flex-col items-center'>
          <h4 className='text-4xl md:text-5xl font-bold'>Hello Again!</h4>
          <span className='py-2 text-lg md:text-xl text-center text-gray-500'>
            Explore More by Connecting with Us.
          </span>
        </div>

        <form className='py-1'>
          <div className='profile flex justify-center py-2'>
            <img src={avatar} alt="avatar" className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          <div className='textbox flex flex-col items-center gap-4'>
            <input type="text" placeholder='username' className={styles.text} />
            <button type="submit" className={`${styles.button} w-full md:w-80`}>Let's Go</button>

          </div>

          <div className='text-center py-2'>
            <span className='text-gray-500'>
              Not a Member?<Link className='text-red-500' to='/register'> Register Now</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
