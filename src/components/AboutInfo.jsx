import React from "react";
import { Container, Heading, Image, Text, Box } from "@chakra-ui/react";
import dotsSvg from "./assets/dots.svg";
import heroGirl from "./assets/hero-girl.jpg";

const AboutInfo = () => {
    return (
        <Container centerContent color="mainColor" maxW={"70%"}>
            <Heading
                as="h2"
                size={["md", "xl", "2xl"]}
                mt={[75, 150, 200, 240]}
                mb={3}
                fontFamily="Fredoka One"
            >
                About Us
            </Heading>
            <Image src={dotsSvg} mb={[5, 25, 25, 100]} />
            <Box w={["100%"]}>
                {/* Starting Left Paragraph*/}
                <Image
                    display={["none", "block"]}
                    float={"right"}
                    src={heroGirl}
                    boxSize={"xl"}
                    fit={"cover"}
                    ml={6}
                    mb={6}
                />
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                >
                    Berumen Childcare has 20+ years providing the Oceanside
                    community with quality childcare. We specialize in providing
                    an environment that is sensitive and nurturing for the
                    development of the children to which we provide care.
                </Text>
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                    mt={5}
                >
                    Located in close proximity to the Camp Pendleton Military
                    Base, we are particularly attuned to the unique needs of
                    military families. We possess a thorough understanding and
                    are sympathetic to the scheduling challenges that enlisted
                    personnel face such as early mornings for physical training,
                    required overnight stays, and potential deployments. All of
                    these elements can make finding childcare difficult;
                    however, Berumen Childcare, can meet your scheduling needs.
                </Text>
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                    mt={5}
                >
                    Our educational outlook incorporates elements of Play-Based
                    and Montessori Philosophies. Play-Based Philosophy is rooted
                    in the premise that children develop concepts and skills
                    through meaningful play.
                </Text>
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                    mt={5}
                >
                    Play facilitates physical, emotional, cognitive, and social
                    development in children. Berumen Childcare, combines these
                    ideals with the Montessori Philosophy which is based on the
                    idea that children are active participants in guiding their
                    own learning and their learning is self-motivated. We
                    believe each child is unique and has individual learning
                    preferences and styles.
                </Text>
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                    mt={5}
                >
                    The children in our care are provided with a supportive and
                    nurturing environment in which they can learn through
                    age-appropriate, play-based experiences established from
                    these two educational philosophies of learning. Children are
                    grouped together regardless of age so peer modeling can be
                    incorporated into learning tasks. Younger children are then
                    provided with the opportunity to learn from older peers.
                </Text>
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                    mt={5}
                >
                    In addition to providing play-based learning experiences, we
                    support and guide children in becoming as independent as
                    possible (i.e., developmentally appropriate) in activities
                    of daily living. For example, children set their own place
                    settings at mealtimes and work on fine motor skills (e.g.,
                    cutting with scissors, coloring with crayons) during their
                    day. Children are appropriately supported in all activities
                    and encouraged to develop at their own pace.
                </Text>
                <Text
                    fontSize={["sm", "lg", "xl"]}
                    fontWeight="medium"
                    color={"mainColor"}
                    textIndent={50}
                    mt={5}
                >
                    Berumen Childcare, is an inclusive program that welcomes
                    children with disabilities; however, we do not currently
                    have the resources to provide care needed for medically
                    fragile children. Please reach out to us with any questions
                    you may have regarding the needs of your child.
                </Text>
            </Box>
        </Container>
    );
};

export default AboutInfo;
