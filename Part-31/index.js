/*
    const students = ["Spongebob","Patrick","Sandy","John"];
    const studentsUpper = students.map(upperCase);
    const studentsLower = students.map(lowerCase);

    console.log("Upper: "+studentsUpper);
    console.log("Lower: "+studentsLower);

    function upperCase(element) {
        return element.toUpperCase();
    }

    function lowerCase(element) {
        return element.toLowerCase();
    }
*/

    const dates = ["2024-1-10","2025-10-1","2026-6-9","2027-12-20"];
    const formattedDates = dates.map(formatDates);

    console.log(formattedDates);

    function formatDates(element) {
        const parts = element.split("-");
        return `${parts[1]}/${parts[2]}/${parts[0]}`;
    }

