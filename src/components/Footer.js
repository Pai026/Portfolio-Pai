import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <footer class="bg-gray-300  home flex-wrap">
                <div className="md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                    <p class="inline-flex text-blue-500">
                        Copyright <i className="text-blue-500 fa fa-copyright"></i></p>
                        
                        <p class="inline-flex text-blue-500">
                         Abhiram R Pai 2021
                    </p>
                    </div>
            </footer>
        );
    }
}

export default Footer;
