import React from "react";
import { Flex, Container, Image, Heading } from "@chakra-ui/react";
import ParentsCard from "../components/ParentsCard";
import brightwheelLogo from "../components/assets/brightwheel.png";
import bookIcon from "../components/assets/read-book-icon.svg";
import dotsSvg from "../components/assets/dots.svg";

const Parentsportal = () => {
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
                    Parents Portal
                </Heading>
                <Image src={dotsSvg} mb={[5, 5, 5, 75]} />
                <Container
                    textAlign={"center"}
                    color={"mainColor"}
                    fontWeight={500}
                >
                    Here are some useful links for parents.
                </Container>
                <Flex
                    direction={["column", "row"]}
                    justify={"space-around"}
                    align={"center"}
                    w={"65%"}
                    h={"2xl"}
                    my={[10, 30]}
                >
                    <ParentsCard
                        type={"external"}
                        title={"Parent Software"}
                        img={brightwheelLogo}
                        buttonText={"Login to Brightwheel"}
                        buttonLink={"https://mybrightwheel.com/"}
                    />
                    <ParentsCard
                        type={"download"}
                        title={"Parents Handbook"}
                        img={bookIcon}
                        buttonText={"Download Handbook"}
                        buttonLink={"/berumen-childcare-policy.pdf"}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Parentsportal;
