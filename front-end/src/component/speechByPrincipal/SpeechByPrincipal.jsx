import React from 'react'
import { banner1 } from '../../assets/photo'

function SpeechByPrincipal() {
  return (
    <div className='grid lg:grid-cols-2 m-12 gap-16 py-16 '>
        <div className='flex  justify-center lg:justify-end'>
            <img src={banner1} alt="" className='justify-end items-end ' />
        </div>
        <div className='flex items-center'>
          <div>
          <div className='relative'>
        <h2>SPEECH</h2>
        <div className='h-1 w-[120px] bg-black rounded-lg'></div>
        </div>
          {/* 200 text */}
           <p className='py-4 lg:mr-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a ea sint maxime. Enim alias corrupti in recusandae nobis eos, obcaecati cum sapiente odio officiis asperiores ipsa ducimus animi magnam minus, dolores non. Dolore cupiditate neque hic? Tempore, vitae sit labore in odio officia libero amet, quos aperiam, ullam quam aliquam harum similique repudiandae vero temporibus voluptas repellendus! Tempore voluptatum ex architecto voluptates ipsam ducimus culpa amet sunt, similique error voluptas impedit quod asperiores repudiandae suscipit fuga ipsa dolores nam numquam nesciunt ullam alias cum. At, nostrum tempora voluptatibus inventore id, enim corrupti maxime molestias cupiditate nisi ratione praesentium dolorem?</p>
           <button className='read-more bg-gray-500'>Read more...</button>
          
          </div>
        </div>
    </div>
  )
}

export default SpeechByPrincipal