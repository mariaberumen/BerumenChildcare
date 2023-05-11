import {
    Flex,
    Container,
    Heading,
    Text,
    Button,
    Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dotsSvg from "./assets/dots.svg";
import heartsSvg from "./assets/hearts.svg";

const Whoweare = () => {
    return (
        <Flex>
            <Container
                centerContent
                color={"mainColor"}
                maxW={["container.sm", "container.sm", "container.lg"]}
                mt={30}
            >
                <Heading
                    as="h2"
                    size={{ base: "lg", md: "xl", "2xl": "2xl" }}
                    mb={3}
                    fontFamily="Fredoka One"
                >
                    Who We Are
                </Heading>
                <Image src={dotsSvg} mb={[5, 25, 25, 100]} />
                <Text
                    noOfLines={[5, 5, 5, 8]}
                    align="center"
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                >
                    Berumen Childcare has 20+ years providing the Oceanside
                    community with quality childcare. We specialize in providing
                    an environment that is sensitive and nurturing for the
                    development of the children to which we provide care.
                    Located in close proximity to the Camp Pendleton Military
                    Base, we are particularly attuned to the unique needs of
                    military families...
                </Text>
                <Link to={"/About"}>
                    <Button
                        size={{ base: "lg", md: "md" }}
                        fontWeight="500"
                        backgroundColor="mainColor"
                        color="bkColor"
                        mt={10}
                        _hover={{
                            background: "none",
                            color: "hiColor",
                            fontWeight: "600",
                        }}
                    >
                        Learn More
                    </Button>
                </Link>
                <Image src={heartsSvg} my={[100, 100, 100, 200]} />
            </Container>
        </Flex>
    );
};
export default Whoweare;
