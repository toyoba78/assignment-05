import React from 'react';
import { FaReact, FaStar } from "react-icons/fa";



const CardTach = () => {
    return (
        <div>
                                 <div className="w-[315px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            
                  {/* Top Section */}
                  <div className="flex items-center justify-between">
                    <FaReact className="text-[38px] text-[#61DAFB]" />
            
                    <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-500">
                      Popular
                    </span>
                  </div>
            
                  {/* Content */}
                  <div className="mt-7">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      React
                    </h2>
            
                    <p className="mt-2 text-[15px] leading-6 text-slate-500">
                      A declarative, component-based
                      JavaScript library for building modern
                      user interfaces.
                    </p>
                  </div>
            
                  {/* Tags */}
                  <div className="mt-6 flex items-center gap-2">
            
                    <span className="rounded bg-slate-100 px-2 py-1 text-sm text-slate-600">
                      Frontend
                    </span>
            
                    <span className="text-sm text-slate-500">
                      Beginner-Friendly
                    </span>
            
                    {/* Rating */}
                    <div className="ml-auto flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-sm font-medium">
                        4.9
                      </span>
                    </div>
            
                  </div>
            
                  {/* Button */}
                  <button
                    className="mt-5 w-full rounded-lg bg-[#080d1d] py-3
                    text-sm font-medium text-white hover:bg-slate-800"
                  >
                    Add to Stack
                  </button>
            
                </div>
        </div>
    );
};

export default CardTach;