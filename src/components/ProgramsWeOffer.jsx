import React from "react";
import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import ProgramsCard from "./ProgramsCard";
import dotsSvg from "./assets/dots.svg";
import heartsSvg from "./assets/hearts.svg";
import infantImg from "./assets/imgslides/infint-feeding_01.jpg";
import toddlerImg from "./assets/imgslides/child-playing_03.jpg";
import preschoolImg from "./assets/imgslides/child-playing_05.jpg";
import schoolageImg from "./assets/imgslides/child-playing_02.jpg";
import schoolagesummerImg from "./assets/imgslides/child-playing_04.jpg";

const ProgramsWeOffer = () => {
    return (
        <Flex direction={"column"}>
            <Flex
                direction={"column"}
                justify={"center"}
                align={"center"}
                w={"100%"}
                h={"auto"}
                mt={[75, 150, 200, 240]}
            >
                <Heading
                    zIndex={3}
                    as="h2"
                    size={["md", "xl", "2xl"]}
                    mb={3}
                    fontFamily="Fredoka One"
                    color={"mainColor"}
                >
                    Our Childcare Programs
                </Heading>
                <Image src={dotsSvg} mb={[5, 5, 5, 75]} />
                <Container
                    textAlign={"center"}
                    color={"mainColor"}
                    fontWeight={500}
                >
                    Below are the programs we offer here at Berumen Childcare.
                    Feel free to contact us for more information!
                </Container>
                <Flex
                    my={[5, 100]}
                    w={"100%"}
                    h={"auto"}
                    justify={"space-around"}
                    align={"center"}
                    flexWrap={"wrap"}
                >
                    <ProgramsCard
                        programImg={infantImg}
                        title={"Infants"}
                        ageGroup={"6 weeks - 24 months"}
                        perWeek={"$260 per week"}
                    />
                    <ProgramsCard
                        programImg={toddlerImg}
                        title={"Toddlers"}
                        ageGroup={""}
                        perWeek={"$215 per week"}
                    />
                    <ProgramsCard
                        programImg={preschoolImg}
                        title={"Preschool"}
                        ageGroup={"2 - 5 Years Old"}
                        perWeek={"$200 per week"}
                    />
                    <ProgramsCard
                        programImg={schoolageImg}
                        title={"School Age"}
                        ageGroup={""}
                        perWeek={"$150 - $175 per week"}
                    />
                    <ProgramsCard
                        programImg={schoolagesummerImg}
                        title={"School Age Summer"}
                        ageGroup={""}
                        perWeek={"$190 per week"}
                    />
                </Flex>
                <Image src={heartsSvg} my={[50, 200, 200]} />
            </Flex>
        </Flex>
    );
};

export default ProgramsWeOffer;
