import { Card, CardBody, Stack, Box, Text, Flex } from "@chakra-ui/react";

const PreviewCard = ({ imgSrc, programTitle }) => {
    return (
        <Card w="xs" h="sm" bg="bkColor" color="mainColor" boxShadow="2xl">
            <CardBody>
                <Box
                    backgroundImage={imgSrc}
                    backgroundRepeat={"no-repeat"}
                    w="100%"
                    h={"200px"}
                    borderRadius={"md"}
                    backgroundSize={"cover"}
                    backgroundPosition={"center"}
                />
                <Flex mt={50} align={"center"} justify={"center"}>
                    <Text fontSize="3xl" fontWeight={600} textAlign="center">
                        {programTitle}
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    );
};
export default PreviewCard;
