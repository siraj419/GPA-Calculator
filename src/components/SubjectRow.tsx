import { useContext } from 'react';
import { Subject } from '../types';
import { calculateTotalObtained,
         getGradeLetter,
         calculateGradePoints,
         calculateCreditPoints,
         calculatePercentage
} from '../utils/logic';
import { subjectContext } from '../store/SubjectContext';

const SubjectRow = ({subject} : {subject: Subject}) => {
  const totalObtained = calculateTotalObtained(subject);
  const percentage = calculatePercentage(subject);
  const gradePoints = calculateGradePoints(percentage);
  const creditPoints = calculateCreditPoints(subject);

  const {handleInputChange, removeSubject} = useContext(subjectContext);

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-2 px-4">
        <span className="font-medium">{subject.name}</span>
      </td>
      <td className="py-2 px-4">
        <input
          type="number"
          min="0"
          step="0.5"
          value={subject.creditHours}
          onChange={(e) => handleInputChange(subject.id, 'creditHours', e.target.value)}
          className="w-16 p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4">
        {!subject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            value={subject.quiz || 0}
            onChange={(e) => handleInputChange(subject.id, 'quiz', e.target.value)}
            className="w-16 p-1 border rounded"
          />
        )}
      </td>
      <td className="py-2 px-4">
        {!subject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            value={subject.assignment || 0}
            onChange={(e) => handleInputChange(subject.id, 'assignment', e.target.value)}
            className="w-16 p-1 border rounded"
          />
        )}
      </td>
      <td className="py-2 px-4">
        {!subject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            value={subject.mid || 0}
            onChange={(e) => handleInputChange(subject.id, 'mid', e.target.value)}
            className="w-16 p-1 border rounded"
          />
        )}
      </td>
      <td className="py-2 px-4">
        {subject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            value={subject.lab || 0}
            onChange={(e) => handleInputChange(subject.id, 'lab', e.target.value)}
            className="w-16 p-1 border rounded"
          />
        )}
      </td>
      <td className="py-2 px-4">
        <input
          type="number"
          min="0"
          step="0.1"
          value={subject.terminal || 0}
          onChange={(e) => handleInputChange(subject.id, 'terminal', e.target.value)}
          className="w-16 p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4">
        <input
          type="number"
          min="0"
          value={subject.totalMarks}
          onChange={(e) => handleInputChange(subject.id, 'totalMarks', e.target.value)}
          className="w-16 p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4 font-medium text-center">{totalObtained.toFixed(1)}</td>
      <td className="py-2 px-4 font-medium">{percentage}%</td>
      <td className="py-2 px-4 font-medium">
        {gradePoints.toFixed(2)} ({getGradeLetter(gradePoints)})
      </td>
      <td className="py-2 px-4 font-medium">{creditPoints.toFixed(2)}</td>
      <td className="py-2 px-4">
        <button 
          onClick={() => removeSubject(subject.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default SubjectRow;