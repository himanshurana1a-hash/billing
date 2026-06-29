import React from 'react'
import { FaFileInvoice, FaBoxes, FaRupeeSign, FaChartLine } from 'react-icons/fa';
import vision from '../assets/vision.png'
import { FaBolt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
function About() {
  const features = [
    { icon: <FaFileInvoice />, text: "Create GST-compliant invoices instantly" },
    { icon: <FaBoxes />, text: "Manage stock with built-in inventory" },
    { icon: <FaRupeeSign />, text: "Track payments and outstanding dues" },
    { icon: <FaChartLine />, text: "Access reports to grow your business" }
  ];
  return (
    <>
      <div className='justify-items-center mt-10 pt-20'>
        <h1 className='text-blue-400 text-6xl font-bold'> About BissBill </h1>
        <h2 className='font-semibold text-4xl text-black p-3'>
          India's Smart GST Billing Software
        </h2>
        <p className='justify-items-center text-center p-2 text-xl'>BillBill is a powerfull and easy to use GST Billing Software designed specially for india small <br />
          business.Our mission is simple to help shop owners,retailers and growing bussinesses<br />
          manage billing ,inventory and payment without complexity. <br />
          <br />
          We understand that most business owners don’t come from an accounting  background. That’s <br /> why BissBill is built as an easy GST billing software for beginners
          where you can create <br /> invoices, track stock and manage your business in just a few <br />
          clicks.
        </p>
      </div>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left Side: Illustration */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://biss-bill.vercel.app/aboutus1.png"
              alt="Business Dashboard Illustration"
              className="w-full rounded-2xl shadow-lg border border-gray-100"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for Indian Businesses
            </h2>

            <p className="text-gray-600 leading-relaxed">
              BissBill is a complete billing solution that covers everything your business needs:
            </p>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink- w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm italic pt-4">
              Simplifying daily operations for retail and wholesale businesses.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for Indian Businesses
            </h2>

            <p className="text-gray-600 leading-relaxed">
              BissBill is a complete billing solution that covers everything your business needs:
            </p>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink- w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm italic pt-4">
              Simplifying daily operations for retail and wholesale businesses.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src="https://biss-bill.vercel.app/aboutus1.png"
              alt="Business Dashboard Illustration"
              className="w-full rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
        </div>
      </section>


      <div className='bg-white py-16 px-4  flex justify-center text-center'>
        <div className=''>
          <img src={vision} alt="vision"  className=' ml-117 w-30'/>
          <h2 className='text-3xl font-semibold text-gray-700 mb-4'>Our Vision</h2>
          <p className='max-w-2xl mx-auto text-gray-500 mb-4'>
            we aim to empower every small business owner in India with smart
            technology that saves time,reduces error,and increases profiles.
          </p>
          <p className='text-gray-600 italicmb-10'>
            "With BissBill, billing is not just faster - it's smarter."
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto p-10'>
            <div className='bg-gray-100 p-6 rounded-lg  shadow-sm'>
                <FaBolt  className='mx-auto text-xl mb-2 text-gray-600'/>
                <p className='text-sm font-medium'>Simple & Easy</p>
            </div>

               <div className='bg-gray-100 p-6 rounded-lg  shadow-sm'>
                <FaTachometerAlt className='mx-auto text-xl mb-2 text-gray-600'/>
                <p className='text-sm font-medium'>Fast &Efficient</p>
            </div>

               <div className='bg-gray-100 p-6 rounded-lg  shadow-sm'>
                <FaShieldAlt className='mx-auto text-xl mb-2 text-gray-600'/>
                <p className='text-sm font-medium'>100% GST Complient</p>
            </div>

             <div className='bg-gray-100 p-6 rounded-lg  shadow-sm'>
                <FaCloud  className='mx-auto text-xl mb-2 text-gray-600'/>
                <p className='text-sm font-medium'>Secure & Reliable</p>
            </div>

             <div className='bg-gray-100 p-6 rounded-lg  shadow-sm'>
                <FaHeadphones  className='mx-auto text-xl mb-2 text-gray-600'/>
                <p className='text-sm font-medium'>Dedicated Support</p>
            </div>

          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <h2 className='text-3xl font-semibold text-black'>
          Start Using NovaNectoe Today
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Create invoices,Manage inventory, and grow your business-all in one place.
          
        </p>
      </div>


    </>
  )
}

export default About
