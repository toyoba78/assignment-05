import type { Itechnologies } from "../../types/technologies";
import CardTach from "./CardTach";

interface StackTechnologiesProps {
  technologies: Itechnologies[];
  selectedTechnologies: Itechnologies[];
  onAdd: (technology: Itechnologies) => void;
}

const StackTechnologies = ({
  technologies,
  selectedTechnologies,
  onAdd,
}: StackTechnologiesProps) => {

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

      {technologies.map((technology) => {

        const isAdded = selectedTechnologies.some(
          (item) => item.id === technology.id
        );

        return (
          <CardTach
            key={technology.id}
            technologies={technology}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );

      })}

    </div>
  );
};

export default StackTechnologies;