const students = [];

function addStudent() {
    let count = parseInt(prompt("Enter the number of students to add:"));
    for (let i = 0; i < count; i++) {
        let name = prompt("Enter student name:");
        let id = prompt("Enter student ID:");
        let age = prompt("Enter student age:");
        students.push({ name, id, age });
    }
    alert("Students added successfully!");
}

function viewStudents() {
    if (students.length === 0) {
        alert("No students available.");
        return;
    }
    let studentList = students.map(s => `Name: ${s.name}, ID: ${s.id}, Age: ${s.age}`).join("\n");
    alert("Student List:\n" + studentList);
}

function searchStudent() {
    let searchID = prompt("Enter student ID to search:");
    let student = students.find(s => s.id === searchID);
    if (student) {
        alert(`Student Found: Name: ${student.name}, ID: ${student.id}, Age: ${student.age}`);
    } else {
        alert("Student not found.");
    }
}

function deleteStudent() {
    let deleteID = prompt("Enter student ID to delete:");
    let index = students.findIndex(s => s.id === deleteID);
    if (index !== -1) {
        students.splice(index, 1);
        alert("Student deleted successfully!");
    } else {
        alert("Student not found.");
    }
}

function main(){
    while (true) {
        let choice = prompt("Choose an option:\n1. Add Student\n2. View All Students\n3. Search Student\n4. Delete Student\n5. Exit");
        switch (choice) {
            case "1":
                addStudent();
                break;
            case "2":
                viewStudents();
                break;
            case "3":
                searchStudent();
                break;
            case "4":
                deleteStudent();
                break;
            case "5":
                alert("Exiting program.");
                return;
            default:
                alert("Invalid choice! Please enter a number between 1 and 5.");
        }
    }
}
main();