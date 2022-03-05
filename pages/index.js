/* eslint-disable react/jsx-key */
import Layout from "../components/Layout";
import {
  Image,
  Grid,
  GridItem,
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <Layout>
        <Box>
          <Image
            w={"full"}
            h={"50vw"}
            maxH={"600px"}
            objectFit={"cover"}
            src="https://moreo.pk/assets/images/slide/buy-off-shoulder-tops-online-in-pakistan-moreo.jpeg"
            alt="slider"
          />
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            mx={{ base: 5, md: 20 }}
            my={{ base: 5, md: 10 }}
          >
            <GridItem
              colSpan={{ base: 4, md: 2 }}
              w="100%"
              h={"100vw"}
              bg={
                "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
              }
            >
              Big Box
            </GridItem>

            <GridItem w="100%" colSpan={{ base: 4, md: 1 }}>
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                <Box
                  w="100%"
                  h={"280px"}
                  bg={
                    "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
                  }
                >
                  smol box 1
                </Box>
                <Box
                  w="100%"
                  h={"280px"}
                  bg={
                    "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
                  }
                >
                  smol box 2
                </Box>
              </SimpleGrid>
            </GridItem>
            <GridItem
              colSpan={{ base: 4, md: 1 }}
              w="100%"
              h={"600px"}
              bg={
                "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
              }
            >
              Big Box 2
            </GridItem>
          </Grid>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            mx={{ base: 5, md: 20 }}
            my={10}
          >
            <Box
              w="100%"
              h={"600px"}
              bg={
                "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
              }
            >
              Box1
            </Box>
            <Box
              w="100%"
              h={"600px"}
              bg={
                "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
              }
            >
              Box2
            </Box>
          </SimpleGrid>
          <Box textAlign={"center"}>
            <Heading as={"h2"} fontSize={24}>
              Featured Products
            </Heading>
            <Text>Our featured products</Text>
            <SimpleGrid
              columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
              spacing={{ base: 5, md: 10 }}
              mx={{ base: 5, md: 20 }}
              my={10}
            >
              <Box w="100%" h={{ base: "50vw", md: "30vw" }}>
                <Box
                  h={"90%"}
                  bg={
                    "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
                  }
                ></Box>
                <Heading as={"h2"} fontSize={14}></Heading>
              </Box>
              <Box w="100%" h={{ base: "50vw", md: "30vw" }}>
                <Box
                  h={"90%"}
                  bg={
                    "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
                  }
                ></Box>
                <Heading as={"h2"} fontSize={14}></Heading>
              </Box>
              <Box w="100%" h={{ base: "50vw", md: "30vw" }}>
                <Box
                  h={"90%"}
                  bg={
                    "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
                  }
                ></Box>
                <Heading as={"h2"} fontSize={14}></Heading>
              </Box>
              <Box w="100%" h={{ base: "50vw", md: "30vw" }}>
                <Box
                  h={"90%"}
                  bg={
                    "url(https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads.png) no-repeat center top"
                  }
                ></Box>
                <Heading as={"h2"} fontSize={14}></Heading>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
