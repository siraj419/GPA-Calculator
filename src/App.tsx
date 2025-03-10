import GpaDisplay from './components/GpaDisplay';
import Header from './components/Header';
import SubjectTable from './components/SubjectTable';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <SubjectTable />
          <GpaDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;