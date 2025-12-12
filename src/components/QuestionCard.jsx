import { motion } from 'framer-motion';

function QuestionCard({ question, questionNumber, selectedAnswer, onSelectAnswer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}

      className="flex flex-col items-center space-y-14"
    >
      <div className="w-full max-w-3xl">
        <div className="bg-gradient-to-r from-[#c7e9f7] to-[#e4f7fe] rounded-2xl px-14 py-6 text-center border border-[#96e5ff]">
          <h3 className="text-lg font-medium text-gray-800 leading-relaxed">
            {questionNumber}. {question.question}
          </h3>
        </div>
      </div>

      <div className="w-full max-w-2xl space-y-5">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full px-8 py-5 rounded-xl text-center font-medium transition-[background,border-color,box-shadow,color] duration-1000 ease-in-out ${
              selectedAnswer === index
                ? 'bg-gradient-to-r from-[#c7e9f7] to-[#e4f7fe] border border-[#96e5ff] text-gray-800 shadow-lg'
                : 'bg-white text-gray-800 border border-[#96e5ff] shadow-sm hover:bg-gradient-to-r hover:from-[#c7e9f7] hover:to-[#e4f7fe]'}`}
            whileHover={{}}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionCard;
