import React from 'react';

import type { Itechnologies } from "../../types/technologies";
import CardTach from './CardTach';

interface StackTechnologiesProps {
  technologies: Itechnologies[];
}



const StackTechnologies = ({technologies}: StackTechnologiesProps) => {
    console.log(technologies,"technologies from stack technologies")
    return (
        <div className='grid grid-cols-3 gap-3 mt-5 '>
            {
                technologies.map((technologies: Itechnologies, ind: number) => {
                
                return    <CardTach key= {ind} technologies= {technologies} />
                })
                
            }
        </div>
    );
};

export default StackTechnologies;