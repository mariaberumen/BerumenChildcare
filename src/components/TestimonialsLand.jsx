import React from "react";
import {
    Flex,
    Image,
    Heading,
    Button,
    Container,
    Text,
    Link,
} from "@chakra-ui/react";
import TestimonialCarousel from "./TestimonialCarousel";
import dotsSvg from "./assets/dots.svg";

const TestimonialsLand = () => {
    return (
        <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            bg={"mainColor"}
            color={"secColor"}
            w={"100%"}
            h={["2xl", "5xl"]}
        >
            <Heading
                zIndex={3}
                as="h2"
                size={{ base: "lg", md: "xl", "2xl": "2xl" }}
                mb={3}
                mt={[100, 50, 50]}
                fontFamily="Fredoka One"
                color={"bkColor"}
            >
                Testimonials
            </Heading>
            <Image src={dotsSvg} mb={[10, 10, 10, 150]} />
            <TestimonialCarousel />
            <Container display={{ base: "unset", sm: "none" }}>
                <Text
                    fontSize={"lg"}
                    fontWeight={600}
                    textAlign={"center"}
                    my={10}
                >
                    Click on the button below to read some of the amazing things
                    people had to say about us!
                </Text>
            </Container>
            <Link
                href={
                    "https://childcarecenter.us/provider_detail/berumen_maria_family_child_care_oceanside_ca"
                }
                isExternal
            >
                <Button
                    size={{ base: "lg", md: "md" }}
                    fontWeight="500"
                    backgroundColor="bkColor"
                    color="mainColor"
                    mb={100}
                    mt={[10, 0, 0]}
                    _hover={{
                        background: "none",
                        color: "hiColor",
                        fontWeight: "600",
                    }}
                >
                    Read More Testimonials
                </Button>
            </Link>
        </Flex>
    );
};

export default TestimonialsLand;
