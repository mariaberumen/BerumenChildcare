import {
    Flex,
    Box,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    VStack,
    Link,
    useDisclosure,
    Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";

const MenuIcons = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <IconButton
                aria-label="home-gallery"
                fontSize={"25px"}
                color={"mainColor"}
                icon={<HamburgerIcon />}
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} isClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"mainColor"}>
                    <ModalHeader>
                        <Flex float={"right"}>
                            <Button
                                color={"thirdColor"}
                                bg={"mainColor"}
                                onClick={onClose}
                            >
                                X
                            </Button>
                        </Flex>
                    </ModalHeader>
                    <ModalBody>
                        <VStack
                            spacing={4}
                            align="end"
                            color={"thirdColor"}
                            fontSize={"2xl"}
                            fontWeight={600}
                        >
                            <Link as={RouterLink} to="/" onClick={onClose}>
                                Home
                            </Link>
                            <Link as={RouterLink} to="/about" onClick={onClose}>
                                About
                            </Link>
                            <Link
                                as={RouterLink}
                                to="/programs"
                                onClick={onClose}
                            >
                                Programs
                            </Link>
                            <Link
                                as={RouterLink}
                                to="/portal"
                                onClick={onClose}
                            >
                                Parents Portal
                            </Link>
                            <Link
                                as={RouterLink}
                                to="/gallery"
                                onClick={onClose}
                            >
                                Gallery
                            </Link>
                            <Link
                                as={RouterLink}
                                to="/contact"
                                onClick={onClose}
                            >
                                Contact Us
                            </Link>
                            {/* ... other navigation links ... */}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default MenuIcons;
