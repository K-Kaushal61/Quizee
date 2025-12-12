import { motion } from 'framer-motion';

function ProgressBar({ currentQuestion, totalQuestions }) {
  return (
    <div className="w-full">
      <div className="flex gap-3">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const isCompleted = index < currentQuestion - 1;
          const isCurrent = index === currentQuestion - 1;

          return (
            <div
              key={index}
              className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"
            >
              {(isCompleted || isCurrent) && (
                <motion.div
                  className="h-full bg-[#0f2d3a] rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: isCompleted ? '100%' : '65%',
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
