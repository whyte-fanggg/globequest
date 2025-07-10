import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-200 flex justify-center px-4">
      <div className="mt-12 mb-12 max-w-5xl w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-10">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
