import React, { Component } from 'react';
import Social from './Social';
class Footer extends Component {
    render () {
        return (
    <footer class="bg-gray-300 w-full py-6 px-4 my-32 ">
        <div class="flex items-center justify-between my-4">
            <p class="text-blue-500">All rights reserved</p>
            <p class="inline-flex text-blue-500 px-2 pt-6">Built with 
                <svg fill="#e53e3e" viewBox="0 0 24 24"  class="w-5 h-5 mx-1 pt-px text-red-600" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>by Abhiram R Pai.</p>
            <div class="flex items-center">
                <Social />
            </div>
        </div>
        </footer>
        )
    }
}

export default Footer;