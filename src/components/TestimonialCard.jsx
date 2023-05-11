import { Card, CardBody, Stack, Text } from "@chakra-ui/react";

const TestimonialsCard = ({ testimonialText, testimonialName }) => {
    return (
        <Card
            ml={[0, 0, 0, 4]}
            w="lg"
            h="md"
            bg="bkColor"
            color="mainColor"
            boxShadow="dark-lg"
        >
            <CardBody>
                <Stack h="100%" justify={"space-between"}>
                    <Text
                        fontSize={["sm", "sm", "sm", "md", "md", "lg"]}
                        fontWeight={600}
                    >
                        {testimonialText}
                    </Text>
                    <Text textAlign={"center"}>{testimonialName}</Text>
                </Stack>
            </CardBody>
        </Card>
    );
};
export default TestimonialsCard;
