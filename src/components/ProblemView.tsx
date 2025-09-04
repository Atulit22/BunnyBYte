import { getProblemById, getProblemsByLevel } from '../data/problems';
import { ArrowLeft, Play, RotateCcw, Lightbulb, CheckCircle, XCircle, ArrowRight, ArrowLeft as PrevArrow } from 'lucide-react';
import CodeEditor from './CodeEditor';
import CommentSection from './CommentSection';

interface ProblemViewProps {
  problemId: string;
  onBack: () => void;
  navigateToProblem: (problemId: string) => void;
}

export default function ProblemView({ problemId, onBack, navigateToProblem }: ProblemViewProps) {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  const problem = getProblemById(problemId);
  const levelProblems = getProblemsByLevel(problem?.level || 'beginner');
  const currentIndex = levelProblems.findIndex(p => p.id === problemId);
  const prevProblem = currentIndex > 0 ? levelProblems[currentIndex - 1] : null;
  const nextProblem = currentIndex < levelProblems.length - 1 ? levelProblems[currentIndex + 1] : null;

  const { colors } = useTheme();
  const { solvedProblems, markProblemSolved } = useProgress();
  const isSolved = solvedProblems.includes(problemId);

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode);
    }
  }, [problem]);

  const runCode = async () => {
    setIsRunning(true);
    try {
      // Create a function from the user's code
      const userFunction = new Function('return ' + code)();
      
      // Run the test cases
      const results = problem.testCases.map((testCase: any) => {
        try {
          const result = userFunction(...testCase.input);
          const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
          
          return {
            ...testCase,
            actual: result,
            passed,
            error: null
          };
        } catch (error) {
          return {
            ...testCase,
            actual: null,
            passed: false,
            error: error.message
          };
        }
      });

      setTestResults(results);
      
      // Check if all tests passed
      const allPassed = results.every(result => result.passed);
      if (allPassed && !isSolved) {
        markProblemSolved(problemId);
        setOutput('🎉 Congratulations! All tests passed!');
      } else if (allPassed) {
        setOutput('✅ All tests passed!');
      } else {
        setOutput('❌ Some tests failed. Check the results below.');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setTestResults([]);
    }
    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(problem.starterCode);
    setOutput('');
    setTestResults([]);
  };

  if (!problem) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className={colors.textSecondary}>Problem not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className={`flex items-center space-x-2 px-4 py-2 ${colors.textSecondary} hover:text-white transition-colors duration-200`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Learning Path</span>
        </button>

        <div className="flex items-center space-x-4">
          {/* Navigation buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => prevProblem && navigateToProblem(prevProblem.id)}
              disabled={!prevProblem}
              className={`p-2 rounded-lg transition-all duration-200 ${
                prevProblem 
                  ? `${colors.textSecondary} hover:text-white hover:bg-white/10`
                  : 'text-slate-600 cursor-not-allowed'
              }`}
              title="Previous Problem"
            >
              <PrevArrow className="w-5 h-5" />
            </button>
            
            <span className={`text-sm ${colors.textSecondary}`}>
              {currentIndex + 1} of {levelProblems.length}
            </span>
            
            <button
              onClick={() => nextProblem && navigateToProblem(nextProblem.id)}
              disabled={!nextProblem}
              className={`p-2 rounded-lg transition-all duration-200 ${
                nextProblem 
                  ? `${colors.textSecondary} hover:text-white hover:bg-white/10`
                  : 'text-slate-600 cursor-not-allowed'
              }`}
              title="Next Problem"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {isSolved && (
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-green-500 text-sm font-medium">Solved</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Problem Description */}
        <div className="xl:col-span-1">
          <div className={`${colors.surface} rounded-xl p-6 border border-white/10 mb-6`}>
            <div className="flex items-center justify-between mb-4">
              <h1 className={`text-2xl font-bold ${colors.text}`}>
                {problem.title}
              </h1>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                problem.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                problem.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {problem.difficulty} • {problem.points}pts
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-semibold ${colors.text} mb-2`}>Description</h3>
                <p className={colors.textSecondary}>{problem.description}</p>
              </div>

              <div>
                <h3 className={`text-lg font-semibold ${colors.text} mb-2`}>Example</h3>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <code className={`text-sm ${colors.text}`}>{problem.example}</code>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-semibold ${colors.text} mb-2`}>Expected Output</h3>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <code className={`text-sm ${colors.text}`}>{problem.expectedOutput}</code>
                </div>
              </div>

              {/* Hints Section */}
              <div>
                <button
                  onClick={() => setShowHints(!showHints)}
                  className={`flex items-center space-x-2 mb-3 ${colors.textSecondary} hover:text-white transition-colors duration-200`}
                >
                  <Lightbulb className="w-5 h-5" />
                  <span>Hints ({problem.hints.length})</span>
                </button>

                {showHints && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm ${colors.textSecondary}`}>
                        Hint {currentHintIndex + 1} of {problem.hints.length}
                      </span>
                      <div className="space-x-2">
                        <button
                          onClick={() => setCurrentHintIndex(Math.max(0, currentHintIndex - 1))}
                          disabled={currentHintIndex === 0}
                          className={`text-xs px-2 py-1 rounded ${
                            currentHintIndex === 0 ? 'text-slate-500' : 'text-yellow-400 hover:text-yellow-300'
                          }`}
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => setCurrentHintIndex(Math.min(problem.hints.length - 1, currentHintIndex + 1))}
                          disabled={currentHintIndex === problem.hints.length - 1}
                          className={`text-xs px-2 py-1 rounded ${
                            currentHintIndex === problem.hints.length - 1 ? 'text-slate-500' : 'text-yellow-400 hover:text-yellow-300'
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    <p className="text-yellow-300 text-sm">
                      {problem.hints[currentHintIndex]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection problemId={problemId} />
        </div>

        {/* Code Editor and Results */}
        <div className="xl:col-span-2 space-y-6">
          {/* Code Editor */}
          <div className={`${colors.surface} rounded-xl border border-white/10 overflow-hidden`}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <h3 className={`font-semibold ${colors.text}`}>Code Editor</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCode}
                  className={`p-2 ${colors.textSecondary} hover:text-white transition-colors duration-200`}
                  title="Reset Code"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50"
                >
                  <Play className="w-4 h-4" />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>
            </div>
            
            <CodeEditor
              value={code}
              onChange={setCode}
              language="javascript"
            />
          </div>

          {/* Output */}
          {output && (
            <div className={`${colors.surface} rounded-xl p-4 border border-white/10`}>
              <h3 className={`font-semibold ${colors.text} mb-2`}>Output</h3>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <pre className={`text-sm ${colors.text} whitespace-pre-wrap`}>{output}</pre>
              </div>
            </div>
          )}

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className={`${colors.surface} rounded-xl p-4 border border-white/10`}>
              <h3 className={`font-semibold ${colors.text} mb-3`}>Test Results</h3>
              <div className="space-y-3">
                {testResults.map((result: any, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      result.passed
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      {result.passed ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm font-medium ${
                        result.passed ? 'text-green-500' : 'text-red-500'
                      }`}>
                        Test {index + 1}: {result.passed ? 'Passed' : 'Failed'}
                      </span>
                    </div>
                    
                    <p className={`text-xs ${colors.textSecondary} mb-2`}>
                      {result.description}
                    </p>
                    
                    <div className="text-xs space-y-1">
                      <div>
                        <span className={colors.textSecondary}>Input: </span>
                        <code className={colors.text}>{result.input}</code>
                      </div>
                      {result.error ? (
                        <div>
                          <span className="text-red-400">Error: </span>
                          <span className="text-red-300">{result.error}</span>
                        </div>
                      ) : (
                        <>
                          <div>
                            <span className={colors.textSecondary}>Expected: </span>
                            <code className={colors.text}>{JSON.stringify(result.expected)}</code>
                          </div>
                          <div>
                            <span className={colors.textSecondary}>Actual: </span>
                            <code className={result.passed ? colors.text : 'text-red-300'}>
                              {JSON.stringify(result.actual)}
                            </code>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}