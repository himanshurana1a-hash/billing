import React from 'react'

function Pricing() {
  return (
    <div>
       <div className='justify-items-center mt-10 pt-20' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    Flecible Pricing plans<br />

                </p>
                <p className='text-gray-500 mt-10'>
                    Choose a plan that fits your bussiness. Start free and upgrade anything Powerful billing tools at </p>
                <p className='justify-center text-gray-500'> a price that makes sense.
                </p>
            </div>

            <div className='flex items-center  justify-center mt-20 gap-4 '>
                <span className='text-xl font-semibold'>Monthly</span>
                <div className="flex -space-x-7">
                    <div className="w-15 h-8 bg-gray-500 rounded-full"></div>
                    <div className="w-6 h-8 bg-white rounded-full"></div>
                </div>
                <span className='text-xl font-semibold'>Annually</span>
            </div>

            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className='grid md:grid-cols-3 gap-6 p-6 max-w-5xl w-full'>
                    <div className='bg-white p-6 rounded-xl  hover:bg-blue-100 border'>
                        <h2 className='font-semibold text-lg'>Basic</h2>
                        <p className='text-sm text-gray-500'>lorem ipsum is a dummy text used in</p>
                        <h1 className='text-2xl font bold mt-4'>750
                            <span className='trxt-sm text-gray-500'>/month</span>
                        </h1>
                        <button className='w-full mt-6 border border-blue-500 hover:bg-blue-500 text-black py-2 rounded'>
                            Choose plan
                        </button>
                        <p className='text-sm text-gray-500 mt-5'>
                            48-month plan at 11,999 - save 50% <br />
                            Auto-renews at 499/month after the inital term.
                        </p>
                        <hr className='my-4' />
                        <h3 className='font bold mt-5'>
                            <p>Manage 1 Businessbr </p>
                            <p>Access for 1 User + 1 CA </p>
                            <p>Auto sync data across unlimited devices </p>
                        </h3>
                        <hr className='my-4' />
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Dashnoard</li>
                            <li>items</li>
                            <li>company</li>
                            <li>HSH</li>
                            <li>Manufacturer Name</li>

                        </ul>
                    </div>
                    <div className='bg-white p-6 rounded-xl hover:bg-blue-100 border'>
                        <h2 className='font-semibold text-lg'>Premium</h2>
                        <p className='text-sm text-gray-500'>lorem ipsum is a dummy text used in</p>
                        <h1 className='text-2xl font bold mt-4'>750
                            <span className='trxt-sm text-gray-500'>/month</span>
                        </h1>
                        <button className='w-full mt-6 border border-blue-500 text-black-500 hover:bg-blue-500 py-2 rounded'>
                            Choose plan
                        </button>
                        <p className='text-sm text-gray-500 mt-5'>
                            48-month plan at 11,999 - save 50% <br />
                            Auto-renews at 499/month after the inital term.
                        </p>
                        <hr className='my-4' />
                        <h3 className='font bold mt-5'>
                            <p>Manage 1 Businessbr </p>
                            <p>Access for 1 User + 1 CA </p>
                            <p>Auto sync data across unlimited devices </p>
                        </h3>
                        <hr className='my-4' />
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Dashnoard</li>
                            <li>items</li>
                            <li>company</li>
                            <li>HSH</li>
                            <li>Manufacturer Name</li>

                        </ul>
                    </div>
                    <div className='bg-white p-6 rounded-xl hover:bg-blue-100 border'>
                        <h2 className='font-semibold text-lg'>Cloud Startup</h2>
                        <p className='text-sm text-gray-500'>lorem ipsum is a dummy text used in</p>
                        <h1 className='text-2xl font bold mt-4'>750
                            <span className='trxt-sm text-gray-500'>/month</span>
                        </h1>
                        <button className='w-full mt-6 border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white py-2 rounded'>
                            Choose plan
                        </button>
                        <p className='text-sm text-gray-500 mt-5'>
                            48-month plan at 11,999 - save 50% <br />
                            Auto-renews at 499/month after the inital term.
                        </p>
                        <hr className='my-4' />
                        <h3 className='font bold mt-5'>
                            <p>Manage 1 Businessbr </p>
                            <p>Access for 1 User + 1 CA </p>
                            <p>Auto sync data across unlimited devices </p>
                        </h3>
                        <hr className='my-4' />
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Dashnoard</li>
                            <li>items</li>
                            <li>company</li>
                            <li>HSH</li>
                            <li>Manufacturer Name</li>

                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Pricing
