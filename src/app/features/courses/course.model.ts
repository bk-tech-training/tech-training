


interface Question {
  ques: string;
  answers?: { [ans: string]: boolean }[];
}

interface Lesson {
  id: string;
  name: string;
  contant: { [cont: string]: Question };
}

interface Section {
  name: string;
  lessons: Lesson[];
}

export class Course {
  public id: string;
  public name: string;
  public level: string;
  public image_url: string;
  public courseDescription: string;
  public sectiones: Section[];

}
