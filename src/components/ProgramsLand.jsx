import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Heading,
    Button,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import cloudBkground from "./assets/cloud-bkground.svg";
import PreviewCard from "./PreviewCard";
import dotsSvg from "./assets/dots.svg";
import heartsSvg from "./assets/hearts.svg";
import sunSvg from "./assets/sun.svg";
import infantImg from "./assets/imgslides/infint-feeding_01.jpg";
import toddlerImg from "./assets/imgslides/child-playing_03.jpg";
import preschoolImg from "./assets/imgslides/child-playing_05.jpg";
import schoolageImg from "./assets/imgslides/child-playing_02.jpg";
import schoolagesummerImg from "./assets/imgslides/child-playing_04.jpg";

const Hero = () => {
    return (
        <Flex position="relative" h="100%" justify={"center"} align={"center"}>
            <Box
                display={{ base: "none", lg: "block" }}
                position="absolute"
                h="100%"
                w="100%"
                top={0}
                left={0}
                bgPosition="center"
                backgroundImage={cloudBkground}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                overflow="visable"
            />
            <Flex justify="center" align="center" direction="column" w={"80%"}>
                <Image
                    display={{ base: "none", lg: "block" }}
                    zIndex={0}
                    src={sunSvg}
                    w="40%"
                    position="absolute"
                    top={-80}
                    left={0}
                />
                <Heading
                    zIndex={3}
                    as="h2"
                    size={{ base: "lg", md: "xl", "2xl": "2xl" }}
                    mb={3}
                    mt={[10, 10, 10, 100]}
                    fontFamily="Fredoka One"
                    color={"mainColor"}
                >
                    Our Childcare Program
                </Heading>
                <Image src={dotsSvg} mb={[5, 5, 5, 150]} position="relative" />
                <Wrap spacing={"30px"} justify={"center"}>
                    <WrapItem>
                        <PreviewCard
                            imgSrc={infantImg}
                            programTitle="Infants"
                        />
                    </WrapItem>
                    <WrapItem>
                        <PreviewCard
                            imgSrc={toddlerImg}
                            programTitle="Toddler"
                        />
                    </WrapItem>
                    <WrapItem>
                        <PreviewCard
                            imgSrc={preschoolImg}
                            programTitle="Preschool"
                        />
                    </WrapItem>
                    <WrapItem>
                        <PreviewCard
                            imgSrc={schoolageImg}
                            programTitle="School Age"
                        />
                    </WrapItem>
                    <WrapItem>
                        <PreviewCard
                            imgSrc={schoolagesummerImg}
                            programTitle="School Age Summer"
                        />
                    </WrapItem>
                </Wrap>
                <Link to={"/Programs"}>
                    <Button
                        size={{ base: "lg", md: "md" }}
                        fontWeight="500"
                        backgroundColor="mainColor"
                        color="bkColor"
                        mt={[10, 100]}
                        mb={[20, 0, 0]}
                        _hover={{
                            background: "none",
                            color: "hiColor",
                            fontWeight: "600",
                        }}
                    >
                        Learn More
                    </Button>
                </Link>
                <Image
                    zIndex={3}
                    display={["none", "block"]}
                    src={heartsSvg}
                    my={[50, 200, 200]}
                />
            </Flex>
        </Flex>
    );
};
export default Hero;
