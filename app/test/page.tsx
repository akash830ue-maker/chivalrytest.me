"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// 【注意】如果你存放题目的文件不叫这个，请修改这里的路径！
import { questions } from '@/lib/questions';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (questions && questions.length > 0) {
      setAnswers(new Array(questions.length).fill(-1));
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!questions || questions.length === 0) return <div className="text-white text-center mt-20">Loading questions...</div>;
  if (answers.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const hasAnsweredCurrent = answers[currentIndex] !== -1;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectOption = (optionIndex: number) => {
    // 1. 记录当前选择
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);

    // 2. 如果不是最后一题，400ms 后仅在仍停留在该题时前进（避免误跳）
    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === currentIndex ? prev + 1 : prev));
      }, 400);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1 && hasAnsweredCurrent) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (!hasAnsweredCurrent) return;

    const finalScores: Record<string, number> = {
      valor: 0, honor: 0, oath: 0, justice: 0, loyalty: 0, mercy: 0
    };

    answers.forEach((selectedOptionIdx, questionIdx) => {
      if (selectedOptionIdx !== -1) {
        const q = questions[questionIdx];
        const selectedOption = q.options[selectedOptionIdx];
        const trait = q.trait.toLowerCase();
        if (finalScores[trait] !== undefined) {
          finalScores[trait] += selectedOption.score;
        }
      }
    });

    localStorage.setItem('chivalry_raw_scores', JSON.stringify(finalScores));
    router.push('/result');
  };

  return (
    <main className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-3xl w-full z-10">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-3 font-medium">
            <span>Question {currentIndex + 1} / {questions.length}</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-2 transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10 min-h-[500px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">
                {currentQuestion.trait}
              </h2>
              <p className="text-lg sm:text-xl text-slate-100 leading-relaxed mb-6">
                {currentQuestion.text}
              </p>

              <p className="mb-8 border-t border-slate-800/90 pt-6 text-center text-base font-semibold leading-snug text-amber-400 sm:text-lg">
                {currentQuestion.prompt ?? "What will you do, Knight?"}
              </p>

              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option: any, idx: number) => {
                  const isSelected = answers[currentIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-5 border rounded-xl transition-all duration-200 focus:outline-none active:scale-[0.98] ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                          : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                      }`}
                    >
                      {option.text}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 底部防误触导航条 */}
          <div className="flex justify-between items-center mt-4 pt-6 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                currentIndex === 0
                  ? 'text-slate-600 cursor-not-allowed opacity-50'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              ← Previous
            </button>

            {!isLastQuestion ? (
              <button
                onClick={handleNext}
                disabled={!hasAnsweredCurrent}
                className={`px-8 py-2 rounded-lg font-bold transition-all ${
                  !hasAnsweredCurrent
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-amber-600 text-white hover:bg-amber-500 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!hasAnsweredCurrent}
                className={`px-8 py-2 rounded-lg font-bold transition-all ${
                  !hasAnsweredCurrent
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-500 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}