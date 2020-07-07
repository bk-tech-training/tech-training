import { Injectable } from '@angular/core';
// need to be orgnize maybe in class course and lesson
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

interface Cours {
  id: string;
  name: string;
  level: string;
  image_url: string;
  sectiones: Section[];
}

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // bring courses data from server
  courses: Cours[] = [
    {
      id: 'PythonCourse',
      name: 'Python Course',
      level: 'Begginers',
      image_url: 'url',
      sectiones: [
        {
          name: 'Introduction',
          lessons: [
            {
              id: '1',
              name: 'What is Python',
              contant: {
                'Python is awesome': {
                  ques: 'what is python?',
                  answers: [{ 'Python is awesome': true }],
                },
              },
            },
          ],
        },
      ],
    },
  ];

  constructor() {}
}
