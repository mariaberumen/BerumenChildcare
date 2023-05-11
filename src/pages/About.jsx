import { Box } from "@chakra-ui/react";
import AboutInfo from "../components/AboutInfo";
import VMPstatements from "../components/VMPstatements";
import TeamMembers from "../components/TeamMembers";

const About = () => {
    return (
        <Box>
            <AboutInfo />
            <VMPstatements />
            <TeamMembers />
        </Box>
    );
};
export default About;
