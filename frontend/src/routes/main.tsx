import React, { FC, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { mintAnimalTokenContract } from "../contracts";
import AnimalCard from "../components/AnimalCard";

interface MainProps {
  account: string;
}

const Main: FC<MainProps> = ({ account }) => {
  const [newAnimalType, setNewAnimalType] = useState<string>();

  const onClickMint = async () => {
    console.log(account);
    try {
      if (account) {
        const response = await mintAnimalTokenContract.methods
          .mintAnimalToken()
          .send({ from: account });

        if (response.status) {
          // mint 에 성공하면 status 에 true 로 들어옵니다.
          const balanceLength = await mintAnimalTokenContract.methods
            .balanceOf(account)
            .call();

          const animalTokenId = await mintAnimalTokenContract.methods
            .tokenOfOwnerByIndex(
              account,
              parseInt(balanceLength.length, 10) - 1
            )
            .call();

          const animalType = await mintAnimalTokenContract.methods
            .animalTypes(animalTokenId)
            .call();

          setNewAnimalType(animalType);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box>
        {newAnimalType ? (
          <AnimalCard animalType={newAnimalType} />
        ) : (
          <Text>Let's Animal Card!!!</Text>
        )}
      </Box>
      <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint}>
        Mint
      </Button>
    </Flex>
  );
};

export default Main;
