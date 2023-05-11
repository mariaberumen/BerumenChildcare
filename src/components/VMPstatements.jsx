import React from "react";
import {
    Flex,
    Card,
    CardBody,
    Image,
    CardHeader,
    Text,
} from "@chakra-ui/react";
import heartsSvg from "./assets/hearts.svg";

const VMPstatements = () => {
    return (
        <Flex
            direction={"column"}
            color="mainColor"
            justify={"center"}
            align={"center"}
        >
            <Flex
                mt={10}
                h={{ base: "100%", "2xl": "xl" }}
                w={"100%"}
                maxW={"1440px"}
                direction={{ base: "column", lg: "row" }}
                justify={"space-around"}
                align={"center"}
            >
                <Card
                    dir={"column"}
                    borderRadius={"2xl"}
                    bg={"thirdColor"}
                    color={"mainColor"}
                    align={"center"}
                    w={"sm"}
                    h={"lg"}
                    _hover={{
                        shadow: "2xl",
                    }}
                >
                    <CardHeader fontFamily={"Fredoka One"} fontSize={"5xl"}>
                        Vision
                    </CardHeader>
                    <CardBody>
                        <Text align={"center"} fontSize={"lg"} fontWeight={500}>
                            Our vision is to create a compassionate, adaptable,
                            and engaging environment where children can thrive
                            through exploration, play, and individualized
                            learning. We aim to foster self-confidence and
                            curiosity, supporting the unique developmental
                            journey of each child.
                        </Text>
                    </CardBody>
                    <Image src={heartsSvg} mb={10} />
                </Card>
                <Card
                    dir={"column"}
                    borderRadius={"2xl"}
                    bg={"thirdColor"}
                    color={"mainColor"}
                    align={"center"}
                    w={"sm"}
                    h={"lg"}
                    _hover={{
                        shadow: "2xl",
                    }}
                >
                    <CardHeader fontFamily={"Fredoka One"} fontSize={"5xl"}>
                        Mission
                    </CardHeader>
                    <CardBody>
                        <Text align={"center"} fontSize={"lg"} fontWeight={500}>
                            Our mission is to prioritize the well-being and
                            development of each child in our care, tailoring our
                            approach to their individual needs and learning
                            styles. We are committed to providing flexible and
                            understanding childcare solutions, especially for
                            military families facing unique scheduling
                            challenges.
                        </Text>
                    </CardBody>
                    <Image src={heartsSvg} mb={10} />
                </Card>
                <Card
                    dir={"column"}
                    borderRadius={"2xl"}
                    bg={"thirdColor"}
                    color={"mainColor"}
                    align={"center"}
                    w={"sm"}
                    h={"lg"}
                    _hover={{
                        shadow: "2xl",
                    }}
                >
                    <CardHeader fontFamily={"Fredoka One"} fontSize={"5xl"}>
                        Philosophy
                    </CardHeader>
                    <CardBody>
                        <Text align={"center"} fontSize={"lg"} fontWeight={500}>
                            Berumen Childcare combines Play-Based and Montessori
                            Philosophies to create an inclusive, supportive
                            environment that nurtures individualized growth and
                            self-motivated learning. Through age-integrated
                            experiences and peer modeling, children develop
                            independence and essential life skills at their own
                            pace.
                        </Text>
                    </CardBody>
                    <Image src={heartsSvg} mb={10} />
                </Card>
            </Flex>
        </Flex>
    );
};

export default VMPstatements;
