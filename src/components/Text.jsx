import React from 'react';

const Text = ({ variant = 'default', children }) => {
  let textStyle;
  let Tag = 'p';  


  switch (variant) {
    case 'arial_nova_grey':
      textStyle = "text-[#808080] text-[32px] font-normal font-arial-nova text-lg";
      Tag = 'arial_nova_grey';
      break;
    case 'arial_nova_purple':
      textStyle = "text-[#483c7b] text-[32px] font-normal font-arial-nova text-lg ";
      Tag = 'arial_nova_purple';
      break;
    default:
      textStyle = "text-white text-[32px] font-normal font-['Jaro']";  
      break;
  }

  return (
    <Tag className={textStyle}>
      {children}
    </Tag>
  );
};

export default Text;
