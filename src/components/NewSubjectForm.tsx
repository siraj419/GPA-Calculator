import { useContext } from 'react';
import { subjectContext } from '../store/SubjectContext';


const NewSubjectForm = () => {

  const {handleNewSubjectChange, addSubject, newSubject} = useContext(subjectContext);

  return (
    <tr className="border-b bg-gray-50">
      <td className="py-2 px-4">
        <input
          type="text"
          placeholder="Subject Name"
          value={newSubject.name}
          onChange={(e) => handleNewSubjectChange('name', e.target.value)}
          className="w-full p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4">
        <input
          type="number"
          min="0"
          step="0.5"
          placeholder="Credit Hours"
          value={newSubject.creditHours || ''}
          onChange={(e) => handleNewSubjectChange('creditHours', e.target.value)}
          className="w-16 p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4">
        {!newSubject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Quiz"
            value={newSubject.quiz || ''}
            onChange={(e) => handleNewSubjectChange('quiz', e.target.value)}
            className="w-16 p-1 border rounded"
            disabled={newSubject.isLab}
          />
        )}
      </td>
      <td className="py-2 px-4">
        {!newSubject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Assignment"
            value={newSubject.assignment || ''}
            onChange={(e) => handleNewSubjectChange('assignment', e.target.value)}
            className="w-16 p-1 border rounded"
            disabled={newSubject.isLab}
          />
        )}
      </td>
      <td className="py-2 px-4">
        {!newSubject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Mid"
            value={newSubject.mid || ''}
            onChange={(e) => handleNewSubjectChange('mid', e.target.value)}
            className="w-16 p-1 border rounded"
            disabled={newSubject.isLab}
          />
        )}
      </td>
      <td className="py-2 px-4">
        {newSubject.isLab && (
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Lab"
            value={newSubject.lab || ''}
            onChange={(e) => handleNewSubjectChange('lab', e.target.value)}
            className="w-16 p-1 border rounded"
            disabled={!newSubject.isLab}
          />
        )}
      </td>
      <td className="py-2 px-4">
        <input
          type="number"
          min="0"
          step="0.1"
          placeholder="Terminal"
          value={newSubject.terminal || ''}
          onChange={(e) => handleNewSubjectChange('terminal', e.target.value)}
          className="w-16 p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4">
        <input
          type="number"
          min="0"
          placeholder="Total Marks"
          value={newSubject.totalMarks || ''}
          onChange={(e) => handleNewSubjectChange('totalMarks', e.target.value)}
          className="w-16 p-1 border rounded"
        />
      </td>
      <td className="py-2 px-4" colSpan={3}>
        <div className="flex items-center">
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              checked={newSubject.isLab}
              onChange={(e) => handleNewSubjectChange('isLab', e.target.checked)}
              className="form-checkbox h-4 w-4"
            />
            <span className="ml-2">Lab Subject</span>
          </label>
        </div>
      </td>
      <td className="py-2 px-4">
        <button 
          onClick={addSubject}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
          Add
        </button>
      </td>
    </tr>
  );
};

export default NewSubjectForm;