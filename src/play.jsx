import React from 'react';
import { RiFacebookFill, RiTwitterFill, RiGithubFill } from 'react-icons/ri';

const Footer = () => { return ( <footer className="bg-gray-900 text-white py-4"> 
<div className="container mx-auto flex justify-between items-center flex-wrap"> 
<div className="flex mb-4 md:mb-0"> 
<a href="/" className="mr-4 hover:text-gray-400">Home</a> 
<a href="/about" className="mr-4 hover:text-gray-400">About</a> 
<a href="/contact" className="hover:text-gray-400">Contact</a> </div>
 <div className="flex mb-4 md:mb-0"> 
 <a href="/news" className="mr-4 hover:text-gray-400">News</a> 
 <a href="/blog" className="hover:text-gray-400">Blog</a> 
 </div> 
 <div className="flex"> 
 <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xl mr-4 text-white hover:text-blue-500 transition-colors duration-300" >
 <a href="#" target="_blank" rel="noopener noreferrer" aria-label= "twitter"