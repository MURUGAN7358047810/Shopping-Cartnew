import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
    <Title text1={'ABOUT'} text2={'US'}/>
    
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo natus exercitationem illo vitae accusantium obcaecati sapiente numquam similique, quisquam quae facilis ullam at magnam, suscipit eius cumque sequi saepe itaque recusandae. Cupiditate vel ipsam, maxime dolore perspiciatis exercitationem voluptatibus provident?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea dolorem deserunt laborum quos. Ab odio dolorum at laudantium, sint consequatur quas eveniet officiis nesciunt quis magni, nobis consequuntur veniam in ipsam hic delectus quaerat cupiditate? Tempora asperiores, optio soluta accusamus in placeat sapiente deleniti maiores dolor nemo at consectetur!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia ex aliquid voluptas sit commodi, itaque quia nihil, repellat aut quibusdam assumenda excepturi id omnis. Quam maxime, quo facilis deleniti aperiam, ipsum repellat magnam eum asperiores fugit optio facere nostrum.</p>
      </div>
    </div>
    <div className='text-xl py-4'>
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
    
    </div>
    <div className='flex flex-col md:flex-row text-sm md-20 mb-10'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance : </b>
        <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolore nulla nisi nobis quas esse aspernatur, voluptates nam omnis cupiditate pariatur vero voluptas ab at exercitationem corporis reiciendis voluptatum! Asperiores!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience : </b>
        <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolore nulla nisi nobis quas esse aspernatur, voluptates nam omnis cupiditate pariatur vero voluptas ab at exercitationem corporis reiciendis voluptatum! Asperiores!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service : </b>
        <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolore nulla nisi nobis quas esse aspernatur, voluptates nam omnis cupiditate pariatur vero voluptas ab at exercitationem corporis reiciendis voluptatum! Asperiores!</p>
      </div>
    </div>
    <NewsLetterBox />
    </div>
  )
}

export default About