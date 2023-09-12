import React from 'react'
import { HiChevronDoubleRight } from "react-icons/hi2";
import './assets/Fotter.css'
import logo from '../../assets/images/Logo (3).png'
const Footer = () => {
  return (
    <div className='bg-slate-400 mt-10'  >
    <div className='footer-top p-2'>
        <div className='footer-content text-white grid grid-flow-row items-center'>
          <div className='footer-item'>
            <a href="/"><img src={logo} alt="" className='w-[50px] h-[50px]'/></a>
            <a href="/" className='navbar-brand text-blue uppercase block'>
              Shaki <span className='text-white'>games</span>
            </a>
            <p className='para-text'>Lorem ipsum dolor sitamt consectue adispicing duis soolici tudin ague suisomid. Nulla vullam dolor.</p>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title uppercase'>quick links</h5>
            <ul className='footer-item-links'>
              <li><a href="../../pages/Home.jsx" className='text-white'>Gaming</a></li>
              <li><a href="#" className='text-white'>Product</a></li>
              <li><a href="#" className='text-white'>Social Network</a></li>
              <li><a href="#" className='text-white'>Community</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title uppercase'>Supports</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-white'>Setting & Privacy</a></li>
              <li><a href="#" className='text-white'>Help & Support</a></li>
              <li><a href="#" className='text-white'>Live Actions</a></li>
              <li><a href="#" className='text-white'>Our News</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title uppercase'>newsletter</h5>
            <p className='para-text'>Subscribe our newsletter to get our latest update & news.</p>

            <form className='newsletter-form'>
              <div className='input-group flex items-stretch'>
                <input type="text" className="input-group rounded-sm p-3 text-black" placeholder = "Your email address" />
                <button className='input-group-btn bg-white p-3  text-black inline-flex items-center justify-center'>
                  <HiChevronDoubleRight size = { 18 }/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container flex flex-col text-center'>
          <p className='footer-bottom-text text-slate-400 cente p-2'>Copyright &copy; 2023 TunaNguyen - All rights reserved.</p>
          <ul className='footer-bottom-links flex justify-center gap-5'>
            <li><a href="#" className='text-white'>Home</a></li>
            <li><a href="#" className='text-white'>Help Center</a></li>
            <li><a href="#" className='text-white'>Contact</a></li>
            <li><a href="#" className='text-white'>Terms & conditions</a></li>
          </ul>
        </div>
      </div>

      </div>
  )
}
export default Footer