const firstName = "Steven";
const secondName = "Muirhead";

export const personalDetails = {
    firstName: firstName,
    secondName: secondName,
    name: firstName + " " + secondName,
    title: "Software Engineer",
    description: "Software Engineer with a passion for developing solutions for new and interesting problems.",
    github: "https://github.com/naeayedea",
    linkedin: "https://linkedin.com/in/stevenmuirhead/",
};

export function getCurrentYear(): number {
    return new Date().getFullYear();
}