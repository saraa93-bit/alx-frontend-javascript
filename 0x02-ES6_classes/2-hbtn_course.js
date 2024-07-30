export default class HolbertonCourse {
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    // getter
    get name() {
      return this._name;
    }
  
    get length() {
      return this._length;
    }
  
    get students() {
      return this._students;
    }
  
    // setters
    set name(name) {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string');
      }
      this._name = name;
    }
  
    set length(length) {
      if (typeof length !== 'number') {
        throw new Error('Length must be a number');
      }
      this._length = length;
    }
  
    set students(students) {
      if (!Array.isArray(students)) {
        throw new Error('Students must be an array of a strings');
      }
      this._students = students;
    }
  }
