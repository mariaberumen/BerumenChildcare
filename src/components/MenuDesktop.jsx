import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MenuDesktop() {
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "about",
        },
        {
            title: "Programs",
            path: "programs",
        },
        {
            title: "Parents Portal",
            path: "portal",
        },
        {
            title: "Gallery",
            path: "gallery",
        },
        {
            title: "Contact Us",
            path: "contact",
        },
    ];

    return (
        <Flex>
            {navLinks.map((link, index) => (
                <Link
                    color="mainColor"
                    justify="space-between"
                    whiteSpace="nowrap"
                    w="100%"
                    as={RouterLink}
                    to={link.path}
                    textDecor="none"
                    fontSize={["sm", "sm", "sm", "xl"]}
                    fontWeight="500"
                    key={index}
                    mx={["25px", "30px"]}
                    mb={5}
                    _hover={{
                        background: "none",
                        color: "hiColor",
                        fontWeight: "600",
                    }}
                    _focus={{
                        boxShadow: "none",
                        color: "hiColor",
                        fontWeight: "600",
                    }}
                >
                    {link.title}
                </Link>
            ))}
        </Flex>
    );
}
export default MenuDesktop;
