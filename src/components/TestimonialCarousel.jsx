import { useState } from "react";
import {
    Carousel,
    Provider,
    LeftButton,
    RightButton,
} from "chakra-ui-carousel";
import { Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import TestimonialsList from "./TestimonialsList";
import TestimonialsCard from "./TestimonialCard";

const TestimonialCarousel = () => {
    return (
        <Flex
            display={{ base: "none", sm: "flex" }}
            w={{ sm: "100%", md: "100%", lg: "100%", xl: "100%", "2xl": "80%" }}
            h="xl"
            alignItems={"center"}
        >
            <Provider>
                <LeftButton
                    mr={[0, 0, 0, 6]}
                    bg={"mainColor"}
                    color={"bkColor"}
                    fontSize={"2xl"}
                    customIcon={<ArrowLeftIcon />}
                    _hover={{
                        bg: "none",
                        color: "thirdColor",
                    }}
                />
                <Carousel gap={10}>
                    {TestimonialsList.map((testimonial, index) => (
                        <TestimonialsCard
                            key={index}
                            testimonialText={testimonial.text}
                            testimonialName={testimonial.name}
                            testimonialJob={testimonial.jobTitle}
                        />
                    ))}
                </Carousel>
                <RightButton
                    bg={"mainColor"}
                    color={"bkColor"}
                    fontSize={"2xl"}
                    customIcon={<ArrowRightIcon />}
                    _hover={{
                        bg: "none",
                        color: "thirdColor",
                    }}
                />
            </Provider>
        </Flex>
    );
};
export default TestimonialCarousel;
