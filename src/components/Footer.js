import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-blue-700 font-bold mb-2">
                            Copyright © Abhiram R Pai 2021
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
