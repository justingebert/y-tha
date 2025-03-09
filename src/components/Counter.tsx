import React from 'react';
import { Button, useToast, Text, Flex, Box } from '@chakra-ui/react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { useCounter } from '../contexts/CounterContext';
import '../styles/ToastStyles.css';

const Counter: React.FC = () => {
  const { count, increment } = useCounter();
  const toast = useToast();

  const handleIncrement = () => {
    increment();

    toast({
      isClosable: true,
      render: () => (
          <Box className="toastBorder">
            <Box className="toastContent">
                <Box as={FaRegCircleCheck} color="#74C898" width="20px" height="20px"/>
                <Flex direction="column" gap={1}>
                    <Text className="toastTextTitle">Incremented</Text>
                    <Text className="toastTextSubtitle">
                    {`Counter is now ${count}`}
                    </Text>
                </Flex>
            </Box>
        </Box>
      ),
    });
  };

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap="4"
      width="100vw"
      height="100vh"
    >
      <Text fontSize="2xl" m="0">
        Current Count: {count}
      </Text>
      <Button onClick={handleIncrement}>
        +1
      </Button>
    </Flex>
  );
};

export default Counter;
