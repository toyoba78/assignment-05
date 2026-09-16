import { FaStar } from "react-icons/fa";
import type { Itechnologies } from "../../types/technologies";

interface CardTachProps {
  technologies: Itechnologies;
  onAdd: (technology: Itechnologies) => void;
  isAdded: boolean;
}

const CardTach = ({
  technologies,
  onAdd,
  isAdded,
}: CardTachProps) => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

     
      <div className="flex items-center justify-between">

        <img
          src={technologies.icon}
          alt={technologies.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs text-blue-500">
          {technologies.badge}
        </span>

      </div>

      
      <div className="mt-7">

        <h2 className="text-xl font-semibold text-gray-900">
          {technologies.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {technologies.description}
        </p>

      </div>

     
      <div className="mt-5 flex items-center gap-2">

        <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {technologies.category}
        </span>

        <span className="text-xs text-slate-500">
          {technologies.difficulty}
        </span>

       
        <div className="ml-auto flex items-center gap-1">

          <FaStar className="text-yellow-300" />

          <span className="text-sm font-medium">
            {technologies.rating}
          </span>

        </div>

      </div>

      
      <button
        onClick={() => onAdd(technologies)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-3 text-sm font-medium text-white ${
          isAdded
            ? "cursor-not-allowed bg-green-600"
            : "bg-[#0e081d] hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};











export default CardTach;