import React, { Component } from "react";
class Social extends Component {
    render() {
        return (
            <div className="bg-gray-300 condiv ">
                <a
                    className="mr-5 text-gray-800 hover:text-gray-700 cursor-pointer"
                    href="https://github.com/Pai026"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a
                    className="mr-5 text-gray-800 hover:text-gray-700 cursor-pointer"
                    href="https://Instagram.com/abhiram_pai"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    className="mr-5 text-gray-800 hover:text-gray-700 cursor-pointer"
                    href="https://www.facebook.com/abhirampai99"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    className="mr-5 text-gray-800 hover:text-gray-700 cursor-pointer"
                    href="https://www.linkedin.com/in/abhiram-r-pai-bb3288170/"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="mr-5 text-gray-800 hover:text-gray-700 cursor-pointer"
                    href="https://www.twitter.com/pai_abhiram"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    className="mr-5 text-gray-800 hover:text-gray-700 cursor-pointer"
                    href="https://medium.com/@abhirampai1999"
                    rel="noreferrer noopener"
                    target="_blank">
                    <i className="fab fa-medium-m"></i>
                </a>
            </div>
        );
    }
}
export default Social;
