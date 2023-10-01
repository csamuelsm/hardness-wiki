import React, { useEffect, useState } from 'react'

import { Flex, Heading, Text, Link, Button } from '@chakra-ui/react';

function Popular() {

  const [popularItems, setPopularItems] = useState([])

  useEffect(() => {
    // Fetching the popular problems
    async function getData() {
        let res = await fetch('/api/get_issues');
        let data = await res.json();
        console.log(data.data);
        setPopularItems(data.data.items);
    }

    getData();
  }, [])

  return (
    <Flex flexDirection="column">
        <Heading as="h1" size="lg">Popular problems</Heading>
        {popularItems.map((item, idx) => {
        return (
            <Flex flexDirection="row" marginY={5}>
                <Flex flexDirection="column">
                    <Text fontSize="lg" marginRight={3} opacity={0.6}>{idx+1}. </Text>
                </Flex>
                <Flex flexDirection="column">
                    {/*
                    //@ts-ignore */}
                    <Heading as="h2" size="md">{item.title}</Heading>
                    {/*
                    //@ts-ignore */}
                    <Text fontSize="xs"  opacity={0.6}>Submitted by <Link href={item.user.html_url} isExternal>{item.user.login}</Link> | {item.updated_at} | {item.comments} comments</Text>
                    <Flex flexDirection="row" marginY={1}>
                    {/*
                    //@ts-ignore */}
                    {item.labels.map((label) => {
                        return (
                            <Button size="xs" variant="outline" marginX={1}>
                                {label.name}
                            </Button>
                        )
                    })}
                    </Flex>
                </Flex>
            </Flex>
            )
        })}
        <Link href='#'>
            <Button>
                See more
            </Button>
        </Link>
    </Flex>
  )
}

export default Popular