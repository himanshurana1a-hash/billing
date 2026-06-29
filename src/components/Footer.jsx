import React from 'react'
import Navbar from './Navbar'
import { Route } from 'react-router-dom'
function Footer() {
  return (
   <>
   
   <footer className='bg-gray-100 text-black-500 '>
                <div className=' mx-auto pr-20 py-30 pl-20 grid md:grid-cols-4 gap-8'>

                    <div>
                        <h3 className='text-black text-xl  font-semibold mb-2'>Quick Links</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>Home</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Download</li>
                            <li>Resources</li>
                            <li>Blog</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-black text-xl font-semibold mb-2'>Popular Services</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>GST Billing Software</li>
                            <li>Stock Managenent</li>
                            <li>Invoice Generator</li>
                            <li>POS Billing System</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='text-black text-xl font-semibold mb-2'>Company</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Refund Policy</li>
                            <li>Concellation Policy</li>
                           
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-blck text-xl font-semibold mb-2'>Support</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>Contact Us</li>
                            <li>help & Support</li>
                            <li>Video Tutorials</li>
                        </ul>
                    </div>


                </div>

            </footer>
            {/* <footer className='bg-gray-100 text-black-500 '>
                <div className=' mx-auto px-6 grid md:grid-cols-4 py-6 gap-8'>

                    <div>
                        <h3 className='text-black text-xl  font-semibold mb-2'>Company</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Pricing Policy</li>
                            <li>Refundd Pilicy</li>
                            <li>Cancellation Policy</li>
                            <li>Cookie Policy</li>
                            <li>Disclaimer</li>
                            <li>Compliance Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-black text-xl font-semibold mb-2'>Resources</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>Templates & Downloads</li>
                            <li>Free tools</li>
                            <li>Videoa & Demos</li>
                            <li>Help & Support</li>
                            <li>security & Legal</li>
                            <li>Updates & Knowlrdge</li>
                            <li>Blog</li>
                            <li>FAQs</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='text-black text-xl font-semibold mb-2'>Guides</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>Invoicing Guides</li>
                            <li>Payments & Checkout</li>
                            <li>Pricing & Subscription</li>
                            <li>Inventory Management</li>
                            <li>GST & Compliance</li>
                            <li>Report & Analytics </li>
                            <li>E-invoice</li>
                            <li>Case studt</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='text-blck text-xl font-semibold mb-2'>GST</h3>
                        <ul className='space-y-1 test-sm'>

                            <li>GST Basics</li>
                            <li>GST Registration</li>
                            <li>GST Returns</li>
                            <li>GST Payment & Refunds</li>
                            <li>GST Invoices & E-Invoicing</li>
                            <li>Input Tax Credit (ITC)</li>
                            <li>GST Penalties & Compliance</li>
                        </ul>
                    </div>


                </div>

            </footer> */}
   </>
  );
}

export default Footer;
