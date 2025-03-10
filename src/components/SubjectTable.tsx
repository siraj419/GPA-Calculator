import SubjectRow from './SubjectRow';
import NewSubjectForm from './NewSubjectForm';
import { useContext } from 'react';
import { subjectContext } from '../store/SubjectContext';


const SubjectTable = () => {

  const {subjects} = useContext(subjectContext);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-4 text-left">Subject</th>
            <th className="py-3 px-4 text-left">Credit Hours</th>
            <th className="py-3 px-4 text-left">Quiz</th>
            <th className="py-3 px-4 text-left">Assignment</th>
            <th className="py-3 px-4 text-left">Mid</th>
            <th className="py-3 px-4 text-left">Lab</th>
            <th className="py-3 px-4 text-left">Terminal</th>
            <th className="py-3 px-4 text-left">Total Marks</th>
            <th className="py-3 px-4 text-left">Obtained</th>
            <th className="py-3 px-4 text-left">Percentage</th>
            <th className="py-3 px-4 text-left">Grade Points</th>
            <th className="py-3 px-4 text-left">Credit Points</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <SubjectRow
              key={subject.id}
              subject={subject}
            />
          ))}
          <NewSubjectForm />
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;