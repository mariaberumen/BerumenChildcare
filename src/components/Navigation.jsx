import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import MenuDesktop from "./MenuDesktop";
import MenuIcons from "./MenuIcons";
import berumenLogoLg from "./assets/berumen-logo-large.png";

const Navigation = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
        <Flex
            zIndex={99}
            backgroundColor="bkColor"
            direction={{ base: "row", lg: "column" }}
            position="fixed"
            w="100vw"
            px={{ base: 18, lg: 0 }}
            py={[18, 15, 0]}
            maxH={[50, 400]}
            justify={{ base: "space-between", lg: "center" }}
            align="center"
            boxShadow="lg"
        >
            <Image
                w={["100px", "250px", "250px", "275px"]}
                src={berumenLogoLg}
                alt="logo"
                mt={[0, 0, 5]}
                mb={[0, 0, 8]}
            />
            {!isMobile ? <MenuDesktop /> : <MenuIcons />}
        </Flex>
    );
};

export default Navigation;
