import { createContext, ReactNode, useState } from "react";
import { Subject, NewSubject, subjectContextShape } from '../types';
import { subjectsData } from "../db/data";

const emptyNewSubject : NewSubject = {
    name: "",
    quiz: 0,
    assignment: 0,
    mid: 0,
    terminal: 0,
    creditHours: 0,
    totalMarks: 0,
    isLab: false,
    lab: 0
};

const subjectContext = createContext<subjectContextShape>({
    subjects: subjectsData,
    newSubject: emptyNewSubject,
    handleInputChange: () => {},
    handleNewSubjectChange: () => {},
    addSubject: () => {},
    removeSubject: () => {}
});


const SubjectContextProvider = ({children} : {children: ReactNode}) => {

    const [subjects, setSubjects] = useState<Subject[]>(subjectsData);
    const [newSubject, setNewSubject] = useState<NewSubject>(emptyNewSubject);

    const handleInputChange = (id: number, field: keyof Subject, value: number | string) => {
        setSubjects(prevSubjects =>
          prevSubjects.map(subject =>
            subject.id === id ? { ...subject, [field]: typeof value === 'string' ? parseFloat(value) || 0 : value } : subject
          )
        );
      };
    
      const handleNewSubjectChange = (field: keyof NewSubject, value: string | number | boolean) => {
        if (field === "isLab" && typeof value === 'boolean') {
          setNewSubject({
            ...newSubject,
            [field]: value,
            quiz: value ? 0 : newSubject.quiz,
            assignment: value ? 0 : newSubject.assignment,
            mid: value ? 0 : newSubject.mid,
            lab: value ? newSubject.lab : 0,
            totalMarks: value ? 50 : 100
          });
        } else {
          setNewSubject({
            ...newSubject,
            [field]: field === "name" ? value : (typeof value === 'string' ? (parseFloat(value) || 0) : value)
          });
        }
      };

      const addSubject = () => {
        if (!newSubject.name) {
          alert("Please enter a subject name");
          return;
        }
    
        setSubjects([
          ...subjects,
          {
            id: subjects.length + 1,
            ...newSubject
          }
        ]);
    
        setNewSubject(emptyNewSubject);
      };
    
      const removeSubject = (id: number) => {
        setSubjects(subjects.filter(subject => subject.id !== id));
      };

    return (
        <subjectContext.Provider 
            value={{ subjects, newSubject, handleInputChange, handleNewSubjectChange, addSubject, removeSubject }}
        >
            {children}
        </subjectContext.Provider>
    )
}

export  {
  SubjectContextProvider,
  subjectContext
};