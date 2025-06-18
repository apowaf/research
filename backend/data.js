// backend/data.js

// This file contains all the static data for the application.

const databaseData = {
    Department: [
        { department_id: 1, name: 'CSE' }, { department_id: 2, name: 'ECE' },
        { department_id: 3, name: 'EE' }, { department_id: 4, name: 'ME' }
    ],
    Faculty: [
        { faculty_id: 101, name: 'Munshi Yusuf Alam', department_id: 1, designation: 'Professor', email: 'yusuf.alam@university.edu' },
        { faculty_id: 102, name: 'Ananya Sharma', department_id: 1, designation: 'Associate Professor', email: 'ananya.sharma@university.edu' },
        { faculty_id: 103, name: 'Rajesh Kumar', department_id: 2, designation: 'Assistant Professor', email: 'rajesh.kumar@university.edu' },
        { faculty_id: 104, name: 'Priya Das', department_id: 2, designation: 'Professor', email: 'priya.das@university.edu' },
        { faculty_id: 105, name: 'Sourav Sen', department_id: 3, designation: 'Lecturer', email: 'sourav.sen@university.edu' },
        { faculty_id: 106, name: 'Neha Verma', department_id: 4, designation: 'Assistant Professor', email: 'neha.verma@university.edu' },
        { faculty_id: 107, name: 'Praveen Kumar', department_id: 2, designation: 'Associate Professor', email: 'praveen.kumar@university.edu' }
    ],
    Student: [
        { student_id: 201, name: 'Rohan Gupta', department_id: 1, email: 'rohan.gupta@student.edu' },
        { student_id: 202, name: 'Sakshi Patel', department_id: 1, email: 'sakshi.patel@student.edu' },
        { student_id: 203, name: 'Amit Das', department_id: 2, email: 'amit.das@student.edu' },
        { student_id: 204, name: 'Nisha Roy', department_id: 3, email: 'nisha.roy@student.edu' },
        { student_id: 205, name: 'Amit Kumar', department_id: 2, email: 'amit.kumar@student.edu' },
        { student_id: 206, name: 'Anjali Mehra', department_id: 1, email: 'anjali.mehra@student.edu' }
    ],
    Publication: [
        { publication_id: 301, title: 'AI in Healthcare', type: 'Journal', indexing: 'SCI', year: 2022, is_student_paper: 0, mentor_id: 101 },
        { publication_id: 302, title: 'IoT Based Smart Cities', type: 'Conference', indexing: 'IEEE', year: 2022, is_student_paper: 0, mentor_id: 101 },
        { publication_id: 303, title: 'Advanced Robotics', type: 'Journal', indexing: 'SCOPUS', year: 2023, is_student_paper: 0, mentor_id: 103 },
        { publication_id: 304, title: 'Quantum Computing', type: 'Journal', indexing: 'SCI', year: 2023, is_student_paper: 0, mentor_id: 102 },
        { publication_id: 305, title: 'Neural Networks', type: 'Book Chapter', indexing: 'None', year: 2023, is_student_paper: 0, mentor_id: 102 },
        { publication_id: 306, title: 'Renewable Energy Systems', type: 'Patent', indexing: 'None', year: 2022, is_student_paper: 0, mentor_id: 105 },
        { publication_id: 307, title: 'Cybersecurity Trends', type: 'Journal', indexing: 'SCI', year: 2022, is_student_paper: 0, mentor_id: 104 },
        { publication_id: 308, title: 'Blockchain in Finance', type: 'Conference', indexing: 'IEEE', year: 2024, is_student_paper: 0, mentor_id: 104 },
        { publication_id: 309, title: 'Machine Learning Applications', type: 'Journal', indexing: 'SCI', year: 2023, is_student_paper: 0, mentor_id: 101 },
        { publication_id: 310, title: 'Nanotechnology Advances', type: 'Conference', indexing: 'SCOPUS', year: 2025, is_student_paper: 0, mentor_id: 103 },
        { publication_id: 311, title: 'Student Paper on AI', type: 'Conference', indexing: 'IEEE', year: 2023, is_student_paper: 1, mentor_id: 101 },
        { publication_id: 312, title: 'Student Paper on Data Mining', type: 'Journal', indexing: 'SCOPUS', year: 2023, is_student_paper: 1, mentor_id: 103 },
        { publication_id: 313, title: '5G Wireless Networks', type: 'Journal', indexing: 'SCI', year: 2024, is_student_paper: 0, mentor_id: 107 },
        { publication_id: 314, title: 'Next-gen AI Systems', type: 'Conference', indexing: 'IEEE', year: 2025, is_student_paper: 0, mentor_id: 107 },
        { publication_id: 315, title: 'Quantum Communication', type: 'Journal', indexing: 'SCOPUS', year: 2024, is_student_paper: 0, mentor_id: 107 },
        { publication_id: 316, title: 'Smart Cities and IoT', type: 'Conference', indexing: 'IEEE', year: 2025, is_student_paper: 0, mentor_id: 107 },
        { publication_id: 317, title: 'Advanced AI Techniques', type: 'Journal', indexing: 'SCI', year: 2024, is_student_paper: 1, mentor_id: 107 },
        { publication_id: 318, title: 'Smart City Innovations', type: 'Conference', indexing: 'IEEE', year: 2024, is_student_paper: 1, mentor_id: 107 }
    ],
    Faculty_Publication: [
        { faculty_id: 101, publication_id: 301 }, { faculty_id: 101, publication_id: 302 }, { faculty_id: 101, publication_id: 309 },
        { faculty_id: 102, publication_id: 304 }, { faculty_id: 102, publication_id: 305 }, { faculty_id: 103, publication_id: 303 },
        { faculty_id: 103, publication_id: 310 }, { faculty_id: 104, publication_id: 307 }, { faculty_id: 104, publication_id: 308 },
        { faculty_id: 105, publication_id: 306 }, { faculty_id: 107, publication_id: 313 }, { faculty_id: 107, publication_id: 314 },
        { faculty_id: 107, publication_id: 315 }, { faculty_id: 107, publication_id: 316 }, { faculty_id: 107, publication_id: 317 },
        { faculty_id: 107, publication_id: 318 }
    ],
    Student_Publication: [
        { student_id: 201, publication_id: 311, mentor_id: 101 }, { student_id: 202, publication_id: 312, mentor_id: 103 },
        { student_id: 205, publication_id: 317, mentor_id: 107 }, { student_id: 206, publication_id: 318, mentor_id: 107 }
    ],
    Conference: [
        { conference_id: 401, name: 'IEEE Conference on AI', year: 2022, location: 'New York' },
        { conference_id: 402, name: 'SCOPUS Conference on IoT', year: 2025, location: 'London' },
        { conference_id: 403, name: 'International Robotics Summit', year: 2023, location: 'Tokyo' },
        { conference_id: 404, name: 'Energy Sustainability Conference', year: 2022, location: 'Berlin' }
    ],
    Conference_Attendance: [
        { faculty_id: 101, conference_id: 401 }, { faculty_id: 103, conference_id: 402 },
        { faculty_id: 104, conference_id: 403 }, { faculty_id: 105, conference_id: 404 }
    ]
};

const queries = [
    { name: "IEEE Publishers (2022)", description: "Faculties who published in an IEEE conference in 2022.", sql: "SELECT DISTINCT T1.name FROM Faculty AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.faculty_id = T2.faculty_id INNER JOIN Publication AS T3 ON T2.publication_id = T3.publication_id WHERE T3.indexing = 'IEEE' AND T3.year = 2022 AND T3.type = 'Conference'" },
    { name: "Conferences Attended (2021-24)", description: "Conferences attended by faculties from 2021 to 2024.", sql: "SELECT DISTINCT T1.name FROM Conference AS T1 INNER JOIN Conference_Attendance AS T2 ON T1.conference_id = T2.conference_id WHERE T1.year BETWEEN 2021 AND 2024" },
    { name: "SCI Journals by Dept.", description: "SCI journals published, grouped by department.", sql: "SELECT DISTINCT T3.name AS Department, T1.title AS Journal FROM Publication AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.publication_id = T2.publication_id INNER JOIN Faculty AS T4 ON T2.faculty_id = T4.faculty_id INNER JOIN Department AS T3 ON T4.department_id = T3.department_id WHERE T1.indexing = 'SCI' AND T1.type = 'Journal' ORDER BY T3.name" },
    { name: "SCI Journals by M. Y. Alam", description: "SCI journals published by Munshi Yusuf Alam.", sql: "SELECT T1.title FROM Publication AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.publication_id = T2.publication_id INNER JOIN Faculty AS T3 ON T2.faculty_id = T3.faculty_id WHERE T3.name = 'Munshi Yusuf Alam' AND T1.indexing = 'SCI' AND T1.type = 'Journal'" },
    { name: "Total SCI Journals", description: "Count of all SCI journals for the entire college.", sql: "SELECT COUNT(publication_id) AS SCI_Journal_Count FROM Publication WHERE indexing = 'SCI' AND type = 'Journal'" },
    { name: "CSE's SCI/SCOPUS Journals", description: "SCI and SCOPUS indexed journals from the CSE department.", sql: "SELECT T1.title FROM Publication AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.publication_id = T2.publication_id INNER JOIN Faculty AS T3 ON T2.faculty_id = T3.faculty_id INNER JOIN Department AS T4 ON T3.department_id = T4.department_id WHERE (T1.indexing = 'SCI' OR T1.indexing = 'SCOPUS') AND T1.type = 'Journal' AND T4.name = 'CSE'" },
    { name: "Prolific Publishers", description: "Faculties with more than 5 total publications.", sql: "SELECT T1.name FROM Faculty AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.faculty_id = T2.faculty_id GROUP BY T1.name HAVING COUNT(T2.publication_id) > 5" },
    { name: "Patent Publishers", description: "Faculties and their departments who have published patents.", sql: "SELECT T1.name AS Faculty, T4.name AS Department FROM Faculty AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.faculty_id = T2.faculty_id INNER JOIN Publication AS T3 ON T2.publication_id = T3.publication_id INNER JOIN Department AS T4 ON T1.department_id = T4.department_id WHERE T3.type = 'Patent'" },
    { name: "Max Journals by a Faculty", description: "Find the maximum number of journals published by any single faculty.", sql: "SELECT MAX(journal_count) AS Max_Journals FROM (SELECT faculty_id, COUNT(publication_id) AS journal_count FROM Faculty_Publication INNER JOIN Publication ON Faculty_Publication.publication_id = Publication.publication_id WHERE type = 'Journal' GROUP BY faculty_id)" },
    { name: "Students with Publications", description: "List of students who have published papers.", sql: "SELECT DISTINCT T1.name FROM Student AS T1 INNER JOIN Student_Publication AS T2 ON T1.student_id = T2.student_id" },
    { name: "CSE Student Publishers", description: "Count of students from CSE who have published a paper.", sql: "SELECT COUNT(DISTINCT T1.student_id) AS CSE_Student_Publications FROM Student AS T1 INNER JOIN Student_Publication AS T2 ON T1.student_id = T2.student_id INNER JOIN Department AS T3 ON T1.department_id = T3.department_id WHERE T3.name = 'CSE'" },
    { name: "ECE Publishers (2024-25)", description: "ECE faculty who published both journals and conferences in 2024-2025.", sql: "SELECT T1.name FROM Faculty AS T1 JOIN Faculty_Publication AS T2 ON T1.faculty_id = T2.faculty_id JOIN Publication AS T3 ON T2.publication_id = T3.publication_id JOIN Department AS T4 ON T1.department_id = T4.department_id WHERE T4.name = 'ECE' AND T3.year BETWEEN 2024 AND 2025 GROUP BY T1.name HAVING COUNT(DISTINCT CASE WHEN T3.type = 'Journal' THEN T3.publication_id END) > 0 AND COUNT(DISTINCT CASE WHEN T3.type = 'Conference' THEN T3.publication_id END) > 0" },
    { name: "Faculty-Student Collabs", description: "Faculties who have published papers with students as mentors.", sql: "SELECT DISTINCT T1.name FROM Faculty AS T1 INNER JOIN Student_Publication AS T2 ON T1.faculty_id = T2.mentor_id" },
    { name: "CSE/EE Book Chapters (2023)", description: "Book Chapters from CSE and EE departments in 2023.", sql: "SELECT T1.name AS Faculty, T4.name AS Department, T3.title AS Book_Chapter FROM Faculty AS T1 INNER JOIN Faculty_Publication AS T2 ON T1.faculty_id = T2.faculty_id INNER JOIN Publication AS T3 ON T2.publication_id = T3.publication_id INNER JOIN Department AS T4 ON T1.department_id = T4.department_id WHERE T3.type = 'Book Chapter' AND T3.year = 2023 AND T4.name IN ('CSE', 'EE')" },
];

// Export the data so it can be used by other files
module.exports = { databaseData, queries };
