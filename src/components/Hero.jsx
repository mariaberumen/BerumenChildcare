import { Flex, Image, Text, Stack, Container } from "@chakra-ui/react";
import blobMaskSvg from "./assets/hero-girl-mask.png";

const Hero = () => {
    return (
        <Flex
            flexDir="column"
            justify="center"
            align="center"
            h="100%"
            w="100%"
        >
            <Text
                display={{ base: "unset", md: "none" }}
                fontSize={["3xl"]}
                fontFamily="Fredoka One"
                textAlign="center"
                color="mainColor"
                mt={[75, 150, 200, 240]}
            >
                {/* Childcare for your little loved one. */}
                Childcare with heart. Fostering love, growth, and discovery.
            </Text>
            <Image
                position="relative"
                src={blobMaskSvg}
                mt={[3, 5, 200, 200]}
                w={{ base: "100%", "2xl": "80%" }}
            />
            <Container
                display={{ base: "none", md: "unset" }}
                position="absolute"
                maxW={{
                    base: "100%",
                    sm: "500px",
                    md: "1200px",
                    "2xl": "2000px",
                }}
                // top={[100, 50, 175, 190, 225]}
                top={{ base: 100, md: 195, "2xl": 200 }}
                // left={{ sm: 50, md: 50, lg: 50, xl: 100, "2xl": 100 }}
                // ml={{ base: 0, lg: 50 }}
                pl={["20px", "30px", "30px", "125px"]}
                pt={["15px", "15px", "15px", "25px"]}
                fontSize={["xl", "xl", "5xl", "5xl", "7xl", "9xl"]}
                fontFamily="Fredoka One"
                color="bkColor"
            >
                <Text>
                    Childcare with heart. Fostering love, growth, and discovery.
                </Text>
            </Container>
            {/* <Stack
                position="absolute"
                justify={{ xl: "center" }}
                align={["center", "center", "center", "center"]}
                display={{ base: "none", sm: "flex" }}
                top={[100, 50, 175, 190, 225]}
                left={{ sm: 50, md: 50, lg: 50, xl: 100, "2xl": 100 }}
                pl={["20px", "30px", "30px", "125px"]}
                pt={["15px", "15px", "15px", "25px"]}
                spacing={-5}
                fontSize={["xl", "xl", "5xl", "5xl", "7xl", "9xl"]}
                fontFamily="Fredoka One"
                color="bkColor"
            >
                <Text>Childcare with heart. Fostering love, growth, and discovery.</Text>
            </Stack> */}
        </Flex>
    );
};
export default Hero;
