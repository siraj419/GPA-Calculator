export interface Subject {
    id: number;
    name: string;
    quiz?: number;
    assignment?: number;
    mid?: number;
    terminal: number;
    creditHours: number;
    totalMarks: number;
    isLab: boolean;
    lab?: number;
  }
  
export interface NewSubject {
    name: string;
    quiz: number;
    assignment: number;
    mid: number;
    terminal: number;
    creditHours: number;
    totalMarks: number;
    isLab: boolean;
    lab: number;
}

export interface subjectContextShape{
  subjects: Subject[],
  newSubject: NewSubject,
  handleInputChange: (id: number, field: keyof Subject, value: number | string) => void,
  handleNewSubjectChange: (field: keyof NewSubject, value: string | number | boolean) => void,
  addSubject: () => void,
  removeSubject: (id: number) => void
}