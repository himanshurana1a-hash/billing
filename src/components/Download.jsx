import React from 'react'
import Rectangle from '../assets/Rectangle.png'
import mackbook from '../assets/Mackbook.png'
import pccompurt from '../assets/Pccomputer.png'
function Download() {
  return (
    <>
      <div className='text-center-600 text-white px-16 pt-25 px-4 pt-20aa'>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-800 flex justify-center'>Billing Software for PC</h2>
        <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
          Providing you a simple and efficient billing application for your pc to create professional invoices in seconds track income & expenses esily.
        </p>
        <div className='mt-6 flex justify-center gap-4 flex-wrap'>
          <button className='border px-6 py-6 rounded-lg hover:bg-gray-100 text-black'>Download for Mac</button>
          <button className='bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-400'>Download for Windows </button>
        </div>
      </div>

      <div className='px-4 md:px-16 pb-16'>
        <div className='ng-white shadow rounded-lg overflow-hidden'>
          <div className='grid grid-cols-3 bg-gray-100 p-4 font-semibold text-gray-600'>
            <p>Data</p>
            <p>Additional Info</p>
            <p className='text-right'>Downloads</p>
          </div>
          {[{ data: "Nov 21,2025", size: "8.65GB" },
          { data: "Jan 17,2025", size: "7.85GB" },
          { data: "Feb 15,2025", size: "9.65GB" },
          ].map((item, index) => (
            <div key={index} className='grid grid-cols-3 p-4 border-t text-gray-700'>
              <p>{item.data}</p>
              <div>
                <p className='font-medium'> File Name: Adobe Photoshop 2026(v27.1.0.17)Multilingual</p>
                <p className='text-sm text-gray-500'>Version:2026(v27.1.0.17)</p>
              </div>
              <p className='text-right'> {item.size}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="px-6 md:px-16 py-16 bg-gray-50 space-y-20">

        {/* Windows Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Works On Windows
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Fast And Smooth Performance</li>
              <li>• Offline Billing Without Internet</li>
              <li>• Secure Local Data Storage</li>
              <li>• Easy Windows Installation Setup</li>
              <li>• Stable And Reliable Desktop Use</li>
            </ul>

            <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black">
              Download for Windows
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={pccompurt}
              alt="pccomputer"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>


        {/* Mac Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="order-2 md:order-1">
            <img
              src={mackbook}
              alt="Mackbook"
              className="rounded-xl shadow-md w-full"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Works On Mac
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Fast And Smooth Performance</li>
              <li>• Offline Billing Without Internet</li>
              <li>• Secure Local Data Storage</li>
              <li>• Easy Windows Installation Setup</li>
              <li>• Stable And Reliable Desktop Use</li>
            </ul>

            <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black">
              Download for Mac
            </button>
          </div>
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

export default Download
