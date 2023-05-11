import { useState } from "react";
import { IconButton, Flex, Image } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ImgSlides from "./ImgSlides";

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImg = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage
            ? ImgSlides.length - 1
            : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNextImg = () => {
        const isLastImage = currentImageIndex === ImgSlides.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <Flex
            w={["80%", "30%"]}
            h="xl"
            justify="center"
            align="center"
            position="relative"
        >
            <IconButton
                icon={<ArrowLeftIcon />}
                aria-label="Call Segun"
                fontSize={["lg", "4xl"]}
                color="mainColor"
                bg="bkColor"
                mr={[0, 10]}
                onClick={goToPreviousImg}
                _hover={{
                    fontSize: "5xl",
                }}
            >
                Left
            </IconButton>
            <Flex
                overflow={"hidden"}
                minW={["300px", "525px"]}
                h="100%"
                borderRadius={[0, 20]}
                boxShadow={["none", "dark-lg"]}
            >
                {ImgSlides.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            src={image}
                            minW="100%"
                            h="100%"
                            fit="cover"
                            align={"center"}
                            transform={`translateX(-${
                                currentImageIndex * 100
                            }%)`}
                            transition="transform 0.3s ease-in-out"
                        />
                    );
                })}
            </Flex>
            <IconButton
                icon={<ArrowRightIcon />}
                fontSize={["lg", "4xl"]}
                aria-label="Call Segun"
                color="mainColor"
                bg="bkColor"
                ml={[0, 10]}
                onClick={goToNextImg}
                _hover={{
                    fontSize: "5xl",
                }}
            >
                Right
            </IconButton>
        </Flex>
    );
};
export default Carousel;
