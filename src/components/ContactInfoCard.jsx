import React from "react";

import { Card, Flex, CardBody, Stack, Text } from "@chakra-ui/react";

const ContactInfoCard = ({ icon, title, text }) => {
    return (
        <Card
            my={5}
            w={{ sm: "100%", md: "md" }}
            h={"100%"}
            direction={"row"}
            justify={"space-around"}
            align={"center"}
            bg={"mainColor"}
        >
            <Flex h={"100%"} align={"center"} justify={"center"}>
                {icon}
            </Flex>
            <CardBody>
                <Stack align={"start"} justify={"center"} color={"bkColor"}>
                    <Text fontWeight={600} fontSize={"xl"}>
                        {title}
                    </Text>
                    <Text>{text}</Text>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ContactInfoCard;
