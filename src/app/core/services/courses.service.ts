import { Injectable } from '@angular/core';
import { Course } from 'src/app/features/courses/course.model';
// need to be orgnize maybe in class course and lesson
// interface Question {
//   ques: string;
//   answers?: { [ans: string]: boolean }[];
// }

// interface Lesson {
//   id: string;
//   name: string;
//   contant: { [cont: string]: Question };
// }

// interface Section {
//   name: string;
//   lessons: Lesson[];
// }

// export interface Cours {
//   id: string;
//   name: string;
//   level: string;
//   image_url: string;
//   sectiones: Section[];
// }

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // bring courses data from server
  courses: Course[] = [
    {
      id: 'PythonCourse',
      name: 'Python Course',
      level: 'Begginers',
      image_url: '../../assets/images/python.png',
      courseDescription: 'The Python cours for beginners.',
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
        {
          name: 'Variabls',
          lessons: [
            {
              id: '2',
              name: 'Variabls and types',
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
    {
      id: 'LinuxCourse',
      name: 'Linux Course',
      level: 'Begginers',
      image_url: '../../assets/images/linux.jpg',
      courseDescription: 'The Linux cours for beginners.',
      sectiones: [
        {
          name: 'Introduction',
          lessons: [
            {
              id: '2',
              name: 'What is Linux',
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
    {
      id: 'NetworkingCourse',
      name: 'Networking Course',
      level: 'Begginers',
      image_url: '../../assets/images/networking.jpg',
      courseDescription: 'The Networking cours for beginners.',
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
    {
      id: 'CsCourse',
      name: 'Computer Science Course',
      level: 'Begginers',
      image_url: '../../assets/images/matrix.jpg',
      courseDescription: 'The Linux cours for beginners.',
      sectiones: [
        {
          name: 'Introduction',
          lessons: [
            {
              id: '2',
              name: 'What is Linux',
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
    {
      id: 'PythonCourse',
      name: 'Python Course',
      level: 'Begginers',
      image_url: '../../assets/images/python.png',
      courseDescription: 'The Python cours for beginners.',
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
    {
      id: 'LinuxCourse',
      name: 'Linux Course',
      level: 'Begginers',
      image_url: '../../assets/images/linux.jpg',
      courseDescription: 'The Linux cours for beginners.',
      sectiones: [
        {
          name: 'Introduction',
          lessons: [
            {
              id: '2',
              name: 'What is Linux',
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


  getCourses() {
    return this.courses.slice();
  }

  getCourse(id: number) {
    return this.courses[id];
  }
}
