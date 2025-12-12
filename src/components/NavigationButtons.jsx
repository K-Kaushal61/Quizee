import { MoveRight, MoveLeft } from 'lucide-react';
import { motion } from 'framer-motion';

function NavigationButtons({ onBack, onNext, canGoBack, canGoNext }) {
  return (
    <div className="flex justify-end gap-3">
      <motion.button
        onClick={onBack}
        className={`p-3 rounded-xl transition-all ${
          canGoBack
            ? 'bg-gradient-to-r from-[#c7e9f7] to-[#e4f7fe] hover:bg-black text-black'
            : 'bg-gradient-to-r from-[#c7e9f7] to-[#e4f7fe] text-black'
        }`}
      >
        <MoveLeft size={20} />
      </motion.button>

      <motion.button
        onClick={onNext}
        className={`p-3 rounded-xl transition-all ${
          canGoNext
            ? 'bg-gradient-to-r from-[#c7e9f7] to-[#e4f7fe] hover:bg-black text-black'
            : 'bg-gradient-to-r from-[#c7e9f7] to-[#e4f7fe] text-black'
        }`}
      >
        <MoveRight size={20} />
      </motion.button>
    </div>
  );
}

export default NavigationButtons;
