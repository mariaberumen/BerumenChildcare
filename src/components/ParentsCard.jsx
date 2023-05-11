import React from "react";
import {
    Button,
    Card,
    CardBody,
    Stack,
    Heading,
    Image,
    CardFooter,
    Link,
} from "@chakra-ui/react";

const ParentsCard = ({ type, title, img, buttonText, buttonLink }) => {
    return (
        <Card
            w={["xs", "md"]}
            h={["2xs", "lg"]}
            m={[3]}
            bg="bkColor"
            color="mainColor"
            borderColor={"mainColor"}
            borderWidth={"1px"}
            boxShadow={"lg"}
        >
            <CardBody>
                <Stack
                    h="100%"
                    align={"center"}
                    mt={6}
                    textAlign={"center"}
                    justify={"space-around"}
                >
                    <Heading as={"h3"} size={"lg"}>
                        {title}{" "}
                    </Heading>
                    <Image
                        display={["none", "block"]}
                        src={img}
                        boxSize={["100px", "200px"]}
                    />
                    <CardFooter>
                        {type === "external" ? (
                            <Link href={buttonLink} isExternal>
                                <Button
                                    bg={"mainColor"}
                                    color={"bkColor"}
                                    _hover={{
                                        background: "none",
                                        color: "hiColor",
                                        fontWeight: "600",
                                    }}
                                >
                                    {buttonText}
                                </Button>
                            </Link>
                        ) : type === "download" ? (
                            <Link href={buttonLink} download>
                                <Button
                                    bg={"mainColor"}
                                    color={"bkColor"}
                                    _hover={{
                                        background: "none",
                                        color: "hiColor",
                                        fontWeight: "600",
                                    }}
                                >
                                    {buttonText}
                                </Button>
                            </Link>
                        ) : null}
                    </CardFooter>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ParentsCard;
