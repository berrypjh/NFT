import React, { FC } from "react";
import { AspectRatio, Image } from "@chakra-ui/react";

interface AnimalCardProps {
  animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
  return (
    <AspectRatio w={150} h={150}>
      <Image src={`images/${animalType}.png`} alt="AnimalCard" />
    </AspectRatio>
  );
};

export default AnimalCard;
