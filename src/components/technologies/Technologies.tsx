import React, { use } from "react";
import type { Itechnologies } from '../../types/technologies';
import StackTechnologies from "./StackTechnologies";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies, "technologies")
    
    return (
        <div className="">
            <div className="">
                <h1 className="font-bold text-4xl">Explore the Technologies</h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-2">

                <div>
                    <StackTechnologies technologies ={technologies}/>
                </div>


                {/* empty stack card */}
                <div className="max-w-md mx-auto p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
      
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    Your Stack
                  </h2>
      
      
                    <p className="text-sm text-gray-400 mb-6">
                      No technologies selected yet.
                    </p>
      
      
                    <div className="flex items-center justify-center h-28 border border-dashed border-gray-200 rounded-xl bg-gray-50/30">
                      <span className="text-sm text-gray-400 font-medium">
                        Your stack is empty.
                      </span>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Technologies;