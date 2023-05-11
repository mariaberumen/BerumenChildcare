import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, SunIcon } from "@chakra-ui/icons";
import heartsSvg from "./assets/hearts.svg";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfo = () => {
    return (
        <Flex w={["100%", "80%"]} direction={"column"} align={"center"}>
            {/* refactor this later */}
            <Flex
                direction={["column", "row"]}
                justify={["center", "space-around"]}
                align={"center"}
                w={"100%"}
                wrap={"wrap"}
            >
                <ContactInfoCard
                    icon={
                        <PhoneIcon boxSize={10} ml={4} color={"thirdColor"} />
                    }
                    title="Give Us A Call"
                    text="760-231-1995 | 760-809-9408"
                />
                <ContactInfoCard
                    icon={
                        <EmailIcon boxSize={10} ml={4} color={"thirdColor"} />
                    }
                    title="Send Us An Email"
                    text="berumenchildcarellc.@gmail.com"
                />
                <ContactInfoCard
                    icon={<SunIcon boxSize={10} ml={4} color={"thirdColor"} />}
                    title="Come and Visit"
                    text="168 Fireside Street, Oceanside CA 92058"
                />
            </Flex>
            <Image src={heartsSvg} my={[100, 100, 100, 200]} />
        </Flex>
    );
};

export default ContactInfo;
