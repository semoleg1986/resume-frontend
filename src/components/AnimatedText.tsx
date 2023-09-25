import { motion } from "framer-motion";

export const AnimatedText = () => {
    const textLines = [
      "I left my Ph.D. program in biophysics at Moscow State University",
      "to pursue my dream of becoming a programmer.",
      "I have successfully completed international courses in React, Node.js, and AWS,",
      "and worked on a website for a medical physics research project.",
      "I am now seeking new, exciting projects to further enhance my web development skills."
    ];
    const transformWord = (word: string) => {
      if (['Moscow', 'State', 'University'].includes(word)) {
        return (
          <span style={{ color: '#d5d500', fontStyle: 'italic', textTransform: 'capitalize' }}>
            {word}
          </span>
        );
      } else if (['React,', 'Node.js,', 'AWS,'].includes(word)) {
        return (
          <span style={{ color: '#10a710' }}>
            {word}
          </span>
        );
      } else {
        return word;
      }
    };
  
    return (
      <div>
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: window.innerWidth < 968 ? 1 + index * 0.5: 0.5 * index}}
          > 
            {line.split(' ').map((word, wordIndex) => (
              <span key={wordIndex}>
                {transformWord(word)}{' '}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    );
  };