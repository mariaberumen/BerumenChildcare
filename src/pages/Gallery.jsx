import React from "react";
import { Flex, Image, Card, Heading } from "@chakra-ui/react";
import dotsSvg from "../components/assets/dots.svg";
import GalleryImages from "../components/GalleryImages";

const Gallery = () => {
    return (
        <Flex direction={"column"}>
            <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                w={"100%"}
                h={"auto"}
                mt={[75, 150, 200, 240]}
            >
                <Heading
                    zIndex={3}
                    as="h2"
                    size={["md", "xl", "2xl"]}
                    mb={3}
                    fontFamily="Fredoka One"
                    color={"mainColor"}
                >
                    Berumen Childcare Gallery
                </Heading>
                <Image src={dotsSvg} mb={[5, 5, 5, 75]} />
                <Flex
                    my={[5, 25]}
                    w={"100%"}
                    h={"auto"}
                    justify={"space-around"}
                    align={"center"}
                    flexWrap={"wrap"}
                >
                    {GalleryImages.map((image, index) => {
                        return (
                            <Card
                                key={index}
                                m={[2, 10]}
                                minW={"sm"}
                                minH={"xs"}
                                w={"md"}
                                h={"sm"}
                                shadow={"xl"}
                                overflow={"hidden"}
                                _hover={{
                                    shadow: "dark-lg",
                                }}
                            >
                                <Image
                                    src={image}
                                    minW={"245px"}
                                    h="400px"
                                    fit={"cover"}
                                    align={"center"}
                                />
                            </Card>
                        );
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Gallery;
