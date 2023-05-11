import {
    Image,
    Flex,
    Text,
    Stack,
    Link,
    IconButton,
    HStack,
} from "@chakra-ui/react";
import berumenLogoSm from "./assets/berumen-logo-small.png";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";

const Footer = () => {
    return (
        <Flex direction="column" h={{ base: "100%", lg: "lg" }}>
            <Flex
                direction={"column"}
                py={25}
                h={"100%"}
                w="100%"
                bg="thirdColor"
                justify="center"
                align="center"
            >
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    w={{ base: "100%", sm: "80%", "2xl": "50%" }}
                    py={{ base: 25, lg: 0 }}
                    justify={{ base: "center", sm: "space-between" }}
                    align={{ base: "center" }}
                >
                    <Image
                        src={berumenLogoSm}
                        maxW={{ base: "200px", md: "300px" }}
                    />

                    <Stack
                        fontSize={["sm", "lg"]}
                        fontWeight={600}
                        spacing={"19px"}
                        color="mainColor"
                        textAlign="center"
                        mt={{ base: 10, md: 29, lg: 0 }}
                        ml={{ base: 0, lg: 29 }}
                    >
                        <Text as="b" fontSize={["xl", "3xl"]}>
                            Welcome & Hello !
                        </Text>
                        <Text>Mon-Fri 7:00am-5:00pm</Text>
                        <Text>berumenchildcarellc.@gmail.com</Text>
                        <Text>HOME: 760-231-1995 | CELL: 760-809-9408</Text>
                        <Text>168 Fireside Street, Oceanside CA 92058</Text>
                        <Text fontWeight={800} fontSize={"2xl"}>
                            LIC#: 376300619
                        </Text>
                    </Stack>
                </Flex>
                <HStack mt={{ base: 0, md: 75 }} spacing={8}>
                    <Link
                        href="https://www.facebook.com/people/Berumen-Childcare-LLC/100087386642137/"
                        isExternal
                    >
                        <IconButton
                            as={FacebookIcon}
                            color={"mainColor"}
                            bg={"none"}
                            _hover={{
                                bg: "none",
                                color: "bkColor",
                            }}
                        />
                    </Link>
                    <Link
                        href="https://www.instagram.com/berumenchildcarellc/"
                        isExternal
                    >
                        <IconButton
                            as={InstagramIcon}
                            color={"mainColor"}
                            bg={"none"}
                            _hover={{
                                bg: "none",
                                color: "bkColor",
                            }}
                        />
                    </Link>
                </HStack>
            </Flex>
            <Flex
                mx={5}
                bg="bkColor"
                fontSize={{ base: "2xs", md: "sm", lg: "md" }}
                h={["5%", "10%"]}
                justify="space-between"
                align="center"
            >
                <Text color="mainColor" fontWeight={500}>
                    2023 All Rights Reserved
                </Text>
                <Link href="htts://www.zendevstudio.com" isExternal>
                    <Text color="mainColor" fontWeight={500}>
                        Zen Dev Studio
                    </Text>
                </Link>
                <Text color="mainColor" fontWeight={500}>
                    Berumen Childcare LLC
                </Text>
            </Flex>
        </Flex>
    );
};
export default Footer;
