import { Link } from "react-router-dom";
import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import Carousel from "./Carousel";
import dotsSvg from "./assets/dots.svg";
import handPrintsSvg from "./assets/handPrints.svg";

const GalleryLand = () => {
    return (
        <Flex direction="column" w="100%" justify="center" align="center">
            <Image src={handPrintsSvg} mt={100} />
            <Heading
                zIndex={3}
                as="h2"
                size={{ base: "lg", md: "xl", "2xl": "2xl" }}
                mb={3}
                mt={50}
                fontFamily="Fredoka One"
                color={"mainColor"}
            >
                Gallery
            </Heading>
            <Image src={dotsSvg} mb={[10, 10, 10, 150]} />
            <Carousel />
            <Link to={"/Gallery"}>
                <Button
                    size={{ base: "lg", md: "md" }}
                    fontWeight="500"
                    backgroundColor="mainColor"
                    color="bkColor"
                    mt={10}
                    mb={100}
                    _hover={{
                        background: "none",
                        color: "hiColor",
                        fontWeight: "600",
                    }}
                >
                    More Pictures
                </Button>
            </Link>
        </Flex>
    );
};
export default GalleryLand;
