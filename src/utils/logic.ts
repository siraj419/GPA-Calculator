import { Subject } from "../types";

const calculateTotalObtained = (subject: Subject): number => {
    if (subject.isLab) {
      return (subject.lab || 0) + (subject.terminal || 0);
    } else {
      return (subject.quiz || 0) + (subject.assignment || 0) + (subject.mid || 0) + (subject.terminal || 0);
    }
};

const calculatePercentage = (subject: Subject): string => {
    const obtained = calculateTotalObtained(subject);
    return ((obtained / subject.totalMarks) * 100).toFixed(2);
};

const calculateGradePoints = (percentage: string | number): number => {
    const percentNum = typeof percentage === 'string' ? parseInt(percentage) : percentage;
    
    if (percentNum < 50) return 0;
    if (percentNum >= 90) return 4;
    return 2 + ((percentNum-50) * 0.05);
};

const calculateCreditPoints = (subject: Subject): number => {
    const percentage = calculatePercentage(subject);
    const gradePoints = calculateGradePoints(percentage);
    return gradePoints * subject.creditHours;
};

const calculateGPA = (subjects : Subject[]): string => {
    let totalCreditPoints = 0;
    let totalCreditHours = 0;

    subjects.forEach(subject => {
        const creditPoints = calculateCreditPoints(subject);
        totalCreditPoints += creditPoints;
        totalCreditHours += subject.creditHours;
    });

    return totalCreditHours > 0 ? (totalCreditPoints / totalCreditHours).toFixed(2) : '0.00';
};

const getGradeLetter = (gradePoints: number): string => {
    if (gradePoints >= 4.0) return 'A+';
    if (gradePoints >= 3.75) return 'A';
    if (gradePoints >= 3.5) return 'A';
    if (gradePoints >= 3.25) return 'B+';
    if (gradePoints >= 3.0) return 'B';
    if (gradePoints >= 2.75) return 'B-';
    if (gradePoints >= 2.5) return 'C+';
    if (gradePoints >= 2.25) return 'C';
    if (gradePoints >= 2.0) return 'C-';
    if (gradePoints > 2.0) return 'F';
    return 'F';
};

export {
    calculateCreditPoints,
    calculateGPA,
    calculateGradePoints,
    calculatePercentage,
    calculateTotalObtained,
    getGradeLetter
};