import { useContext } from 'react';
import { subjectContext } from '../store/SubjectContext';
import { calculateCreditPoints,
         calculateGPA,
} from '../utils/logic';


const GpaDisplay = () => {

  const {subjects} = useContext(subjectContext);

  const totalCreditHours = subjects.reduce((sum, subject) => sum + subject.creditHours, 0);
  const totalCreditPoints = subjects.reduce((sum, subject) => sum + calculateCreditPoints(subject), 0);
  const gpa = calculateGPA(subjects);

  const getGPAColor = (gpa: string): string => {
    const gpaNum = parseFloat(gpa);
    if (gpaNum >= 3.5) return 'text-green-600';
    if (gpaNum >= 3.0) return 'text-blue-600';
    if (gpaNum >= 2.5) return 'text-yellow-600';
    if (gpaNum >= 2.0) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="mt-8 border-t pt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Credit Hours</h3>
          <p className="text-3xl font-bold">{totalCreditHours}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Credit Points</h3>
          <p className="text-3xl font-bold">{totalCreditPoints.toFixed(2)}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">GPA</h3>
          <p className={`text-4xl font-bold ${getGPAColor(gpa)}`}>
            {gpa}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GpaDisplay;