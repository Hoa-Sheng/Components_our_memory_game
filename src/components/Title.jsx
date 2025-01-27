import React from 'react';

const Title = ({ variant = 'default', children }) => {
  let titleStyle;
  let Tag = 'h1';  
  let customStyles = {}; 


  switch (variant) {
    case 'h1':
      titleStyle = 'font-[Jaro] text-6xl font-normal decoration-skip-none text-[#483C7B]';
      customStyles = { textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }; 
      Tag = 'h1';
      break;
    case 'h2':
      titleStyle = "text-[#432f6e] text-[64px] font-normal font-['Jaro'] ";
      customStyles = { textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', WebkitTextStroke: '2px rgba(255, 255, 255, 1)' }; 
      Tag = 'h2';
      break;
    case 'h3':
      titleStyle = "text-white text-5xl font-normal font-['Jaro'] text-[ffffff]";
      Tag = 'h3';
      break;
    case 'highlighted':
      titleStyle = "text-[#432f6e] text-4xl font-normal font-['Jaro'] text-[40px] ";
      customStyles = { textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', WebkitTextStroke: '2px rgba(255, 255, 255, 1)' }; 
      Tag = 'h2';
      break;
    default:
      titleStyle = 'font-[Jaro] text-xl text-black';  // Default style
      break;
  }

  return (
    <Tag className={titleStyle} style={customStyles}>
      {children}
    </Tag>
  );
};

export default Title;
