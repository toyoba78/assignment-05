import { use, useState } from "react";

import { toast } from "react-toastify";

import type { Itechnologies } from "../../types/technologies";

import StackTechnologies from "./StackTechnologies";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Itechnologies[]>([]);

  // Add to Stack
  const handleAddToStack = (technology: Itechnologies) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.error("This technology is already added!");
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to stack!`);
  };

  // Remove
  const handleRemove = (id: string) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.info("Technology removed from stack!");
  };

  // Remove All
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.success("All technologies removed!");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore the Technologies
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_300px]">

        <div>
          <StackTechnologies
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAdd={handleAddToStack}
          />
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-5">

          <div className="flex items-center justify-between gap-2">

            <h2 className="text-xl font-bold text-gray-900">
              Your Stack
            </h2>

            {selectedTechnologies.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="text-xs font-medium text-red-500 hover:text-red-700"
              >
                Remove All
              </button>
            )}

          </div>

          <p className="mt-2 text-sm text-gray-400">

            {selectedTechnologies.length === 0
              ? "No technologies selected yet."
              : `${selectedTechnologies.length} Technology Selected`}

          </p>

          {selectedTechnologies.length === 0 ? (

            <div className="mt-6 flex h-28 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/30">

              <span className="text-sm font-medium text-gray-400">
                Your stack is empty.
              </span>

            </div>

          ) : (

            <div className="mt-6 flex flex-col gap-3">

              {selectedTechnologies.map((technology) => (

                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
                >

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-semibold text-gray-800">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>

                  </div>

                  <button
                    onClick={() => handleRemove(technology.id)}
                    className="text-sm font-bold text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Technologies;