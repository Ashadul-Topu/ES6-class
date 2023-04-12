

// class constructor
class Student{
    constructor(id, name){ // constructor is a function
        this.id = id;
        this.name = name;
    }

    //set method
    set StudentName(name){
        this.name = name;
    }

    // get method
    get StudentInfo(){
        return this.name + " " + this.id;
    }
}

// create a new Student object (object for class constructor)

let Student1 = new Student(12, 'Ashadul');
console.log(Student1);
console.log(Student1.id);

// invoke set method
Student1.StudentName = 'Topu';
console.log(Student1.name);

// invoke get method
console.log(Student1.StudentInfo);

