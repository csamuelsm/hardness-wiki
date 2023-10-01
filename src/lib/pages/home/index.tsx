'use client';

import { Button, Flex } from '@chakra-ui/react';

import Popular from '~/lib/components/Popular';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="left"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Flex flexDirection="row">
        {/* Selectors */}
        <Button size="xs" marginX={1}>
          Popular
        </Button>
        <Button size="xs" variant="ghost" marginX={1}>
          Recently added
        </Button>
        <Button size="xs" variant="ghost" marginX={1}>
          Recently updated
        </Button>
      </Flex>
      <Popular />
    </Flex>
  );
};

export default Home;
