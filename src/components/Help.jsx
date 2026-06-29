import React from 'react';
import Billing from '../assets/Billing.png'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Install react-icons
import { FaXTwitter } from 'react-icons/fa6';

const Help = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F4F7FA] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side: Text Content */}
          <div className="z-10 max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Hello, How can we help you ?
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
              Find instant answers to your questions about BillBiss — India's
              easiest GST billing software. Search from our help guides, tutorials,
              and support articles below.
            </p>
          </div>

          {/* Right Side: Image with Frame */}
          <div className="relative">
            {/* Light Blue Decorative Frame */}
            <div className="bg-[#DAE8FF] rounded-l-[2.5rem] p-3 transform translate-x-16 lg:translate-x-24 shadow-2xl">
              {/* The Actual Image Component */}
              <div className="rounded-l-2xl overflow-hidden border border-gray-200 bg-white">
                <img
                  src={Billing}// Replace with your file path
                  alt="Billing"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Subtle Shadow Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FA] to-transparent w-20 z-20" />
          </div>

        </div>
      </div>


     <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text & Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Can't find what you're looking for? Our support team is here to help. 
              Whether you have a question about GST invoicing, inventory setup, 
              pricing plans, or anything else — just drop us a message and we'll 
              get back to you shortly.
            </p>
          </div>

          <div className="space-y-4 text-gray-900 font-medium pt-4">
            <p>Email: <span className="text-gray-600 font-normal">bissbill@novanectar.co.in</span></p>
            <p>Phone: <span className="text-gray-600 font-normal">+91 89798 91708</span></p>
            <p className="max-w-xs">
              Address: <span className="text-gray-600 font-normal">GMS Rd, Haripuram, Kanwali, Dehradun, Uttarakhand 248001</span>
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wider">Follow Us On:</h4>
            <div className="flex space-x-5 text-2xl text-gray-900">
              <a href="#" className="hover:text-blue-600 transition-colors"><FaLinkedin /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaXTwitter /></a>
              <a href="#" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="space-y-4">
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
            />
            <input 
              type="text" 
              placeholder="Contact Number" 
              className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
            />
            <textarea 
              placeholder="Write a message" 
              rows="5"
              className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 resize-none"
            ></textarea>
            
            <div className="pt-2">
              <button 
                type="submit" 
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>


     < div className='justify-items-center  mt-10' >
                <p className='  text-3xl md:text-5xl font-bold leading-tight '>
                    Frequently Asked Questions<br />

                </p>
                <div className='border rounded-lg bg-white p-4 mt-6 hover:bg-gray-200 cursor-pointer'>
                    <p className='text-sm text-gray-500 w-2xl mt-2 '>
                        Is the billing software really free to use?
                    </p>
                </div>
                <div className='border rounded-lg bg-white p-4 mt-6 hover:bg-gray-200 cursor-pointer'>
                    <p className='text-sm text-gray-500 w-2xl mt-2 '>
                        Is the billing software really free to use?
                    </p>
                </div>
                <div className='border rounded-lg bg-white p-4 mt-6 hover:bg-gray-200 cursor-pointer'>
                    <p className='text-sm text-gray-500 w-2xl mt-2 '>
                        Is the billing software really free to use?
                    </p>
                </div>
                <div className='border rounded-lg bg-white p-4 mt-6 hover:bg-gray-200 cursor-pointer'>
                    <p className='text-sm text-gray-500 w-2xl  mt-2 '>
                        Is the billing software really free to use?
                    </p>
                </div>



            </div>


    </>
  );
};

export default Help;