import React from "react";
import {
    Heading,
    Image,
    Card,
    CardBody,
    Stack,
    Text,
    Box,
    Flex,
} from "@chakra-ui/react";

const ProgramsCard = ({ programImg, title, ageGroup, perWeek }) => {
    return (
        <Card
            w="xs"
            h="md"
            m={[3]}
            bg="bkColor"
            color="mainColor"
            shadow={"lg"}
            _hover={{
                boxShadow: "dark-lg",
                mb: 2,
            }}
        >
            <CardBody>
                <Flex
                    direction={"column"}
                    align={"center"}
                    textAlign={"center"}
                    justify={"space-between"}
                    h={"100%"}
                >
                    <Box
                        w={"100%"}
                        h={"200px"}
                        maxH={"200px"}
                        backgroundImage={programImg}
                        backgroundSize={"cover"}
                        backgroundPosition={"center"}
                    ></Box>
                    <Heading as={"h3"} size={"lg"}>
                        {title}{" "}
                    </Heading>
                    <Stack align={"center"} mt={6} textAlign={"center"}>
                        <Text fontSize={["sm", "lg"]} fontWeight={500}>
                            {ageGroup}
                        </Text>
                        <Text textAlign={"center"} fontWeight={600}>
                            {perWeek}
                        </Text>
                    </Stack>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default ProgramsCard;
