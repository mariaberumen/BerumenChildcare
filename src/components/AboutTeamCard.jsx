import React from "react";

import {
    Card,
    CardBody,
    Text,
    Image,
    Heading,
    Stack,
    Flex,
} from "@chakra-ui/react";

const AboutTeamCard = ({
    employeeName,
    employeePicture,
    employeeTitle,
    employeeAbout,
}) => {
    return (
        <Card
            p={[10, 0]}
            w={["100%", "3xl"]}
            h={["3xl", "sm"]}
            direction={["column", "row"]}
            justify={"center"}
            align={"center"}
            overflow={"hidden"}
            variant={"outline"}
            boxShadow="dark-lg"
        >
            <Image
                src={employeePicture}
                align={"center"}
                maxW={["2xs", "sm"]}
                fit={"cover"}
            />
            <CardBody h={"100%"} p={10} pl={5}>
                <Stack direction={"column"} spacing={"50px"}>
                    <Flex direction={"column"}>
                        <Heading size={"md"} mb={"5px"}>
                            {employeeName}
                        </Heading>
                        <Text>{employeeTitle}</Text>
                    </Flex>
                    <Text>{employeeAbout}</Text>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default AboutTeamCard;
