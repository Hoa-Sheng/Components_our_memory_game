import React from 'react';

const Text = ({ variant = 'default', children }) => {
  let textStyle;
  let Tag = 'p';  


  switch (variant) {
    case 'arial_nova_grey':
      textStyle = "text-[#808080] text-[32px] font-normal font-['Arial Nova']";
      Tag = 'arial_nova_grey';
      break;
    case 'arial_nova_purple':
      textStyle = "text-[#483c7b] text-[32px] font-normal font-['Jaro'] ";
      Tag = 'arial_nova_purple';
      break;
    default:
      textStyle = "text-white text-[32px] font-normal font-['Jaro']";  // Default style
      break;
  }

  return (
    <Tag className={textStyle}>
      {children}
    </Tag>
  );
};

export default Text;
