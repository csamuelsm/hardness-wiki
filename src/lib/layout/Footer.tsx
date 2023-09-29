import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
      {new Date().getFullYear()} -{' '}
        Made by
        {' '}
        <Link href="https://meu-blog-csamuelsm.vercel.app/" isExternal rel="noopener noreferrer">
          Samuel Santos
        </Link>
        {' '}
         with the template from
         {' '}
        <Link href="https://sznm.dev" isExternal rel="noopener noreferrer">
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
