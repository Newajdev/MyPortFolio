import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const VideoModal = ({ isOpen, onClose, videoId }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_80px_rgba(255,159,102,0.2)]"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-accent hover:text-black"
              aria-label="Close video"
            >
              <IoClose size={24} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="Portfolio intro video"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
