import React from 'react'
import Rectangle from '../assets/Rectangle.png'
import bgimage from '../assets/bgimage.png'
function Features() {
  return (
    <> <div className='justify-items-center pt-20' >
      <p className='  text-3xl md:text-5xl font-bold leading-tight '>
        Features of our invoice <br />

      </p>
      <p className='text-gray-500 mt-6'>
        Everything you need to bill faster manage better and scale your bussiness powered by automationbr </p>
      <p className='justify-center text-gray-500'>                                    accuracy and simplicity
      </p>
    </div>

      <span className='text-blue-700 underline flex justify-end px-18'>View all-</span>
      <div className=' max-w-6xl mx-auto px-4 grid grid-cols-2 gap-6 p-6'>
        <div className=' rounded-lg p-4  hover:bg-gray-200 shadow-sm'>
          <h2 className='font-semibold text-sm mb-2'>Auto Discount Engine</h2>
          <p>Automatically suggests the best discount for a customer based on thier purchase history and loyality level .
            <img src={bgimage} alt="bg-img" />
          </p>
        </div>

        <div className=' rounded-lg p-4 hover:bg-gray-200 shadow-sm'>
          <h2 className='font-semibold text-sm mb-2'>Auto Discount Engine</h2>
          <p> Automatically suggests the best discount for a customer based on their purchase history and loyality level.
            <img src={bgimage} alt="bg-img" />
          </p>
        </div>

        <div className=' rounded-lg p-4  hover:bg-gray-200 shadow-sm'>
          <h2 className='font-semibold text-sm mb-2'>Auto Discount Engine</h2>
          <p> Automatically suggests the best discount for a customer based on their purchase history and loyality level.
            <img src={bgimage} alt="bg-img" />
          </p>
        </div>

        <div className=' rounded-lg p-4  hover:bg-gray-200 shadow-sm'>
          <h2 className='font-semibold text-sm mb-2 '>Auto Discount Engine</h2>
          <p> Automatically suggests the best discount for a customer based on their purchase history and loyality level.
            <img src={bgimage} alt="bg-img" />
          </p>
        </div>
      </div>


      <div>
        <div className='bg-white p-6 justify-items-center'>
          <div className='max-w-6xl max-auto bg-gray-200 rounded-2xl p-8 grid md:grid-cols-2 gap-6 items-center'>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold mb-4'>
                Ready to Make Billing Effortless?
              </h1>
              <p className='text-gray-600 mb-6'>
                Create professional GST invoices, track payments, manage inventory,
                and monitor your business — all from one simple, secure billing platform.
                No stress,just smart billing built for growing bussinesses.
              </p>
              <button className='bg-blue-500 text-white px-5 py-2 rounded-md'>
                Staet Free -
              </button>
            </div>
            <div>
              <img src={Rectangle} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
