import React from "react";

import { Flex, Image, Heading } from "@chakra-ui/react";
import AboutTeamCard from "./AboutTeamCard";
import dotsSvg from "./assets/dots.svg";
import heartsSvg from "./assets/hearts.svg";
import mariaBerumen from "./assets/berumen-staff-2.jpg";
import sam from "./assets/berumen-staff-1.jpg";
import vanessa from "./assets/berumen-staff-3.jpg";

// List of employees
//
const employeeList = [
    {
        employeeName: "Maria Isabell Berumen",
        employeePicture: mariaBerumen,
        employeeTitle: "Owner/Director",
        employeeAbout:
            "Maria Berumen has been nurturing children since 2000, bringing invaluable experience as an accredited teacher in child development with an AA degree. As a proud mother of two daughters, she understands the importance of providing a warm and loving environment for every child in our care.",
    },
    {
        employeeName: "Vanessa Narvaez-Barba",
        employeePicture: vanessa,
        employeeTitle: "Teacher",
        employeeAbout:
            "An enthusiastic and passionate childcare professional, is pursuing her associate's degree in child development at Mira Costa College. With 4 years of experience in early childhood education, she is dedicated to creating a safe, fun, and loving environment while supporting each child in reaching their milestones.",
    },
    {
        employeeName: "Samantha Berumen",
        employeePicture: sam,
        employeeTitle: "Assistant Teacher",
        employeeAbout:
            "Samantha's compassionate nature, knowledge of the curriculum, and ability to work well under pressure, she is consistently able to create a supportive and nurturing environment for children.",
    },
];

//MEMBERS

const TeamMembers = () => {
    return (
        <Flex
            direction={"column"}
            color="mainColor"
            justify={"center"}
            align={"center"}
        >
            <Heading
                as="h2"
                size={["md", "xl", "2xl"]}
                mt={[75, 150, 200, 240]}
                mb={3}
                fontFamily="Fredoka One"
            >
                The Berumen Childcare Team
            </Heading>
            <Image src={dotsSvg} mb={[5, 25, 25, 100]} />
            <Flex
                mt={50}
                h={{ base: "7xl", "2xl": "xl" }}
                w={"100%"}
                direction={{ base: "column", "2xl": "row" }}
                justify={"space-around"}
                align={"center"}
            >
                {employeeList.map((employee, index) => {
                    return (
                        <AboutTeamCard
                            key={index}
                            employeeName={employee.employeeName}
                            employeePicture={employee.employeePicture}
                            employeeTitle={employee.employeeTitle}
                            employeeAbout={employee.employeeAbout}
                        />
                    );
                })}
            </Flex>
            <Image src={heartsSvg} my={[100, 100, 100, 200]} />
        </Flex>
    );
};

export default TeamMembers;
