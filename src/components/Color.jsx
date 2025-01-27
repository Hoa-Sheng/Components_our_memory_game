import React from 'react';

const Color = ({ variant = 'default' }) => {
  let colorStyle;
  let Tag = 'p';

  switch (variant) {
    case 'White-1':
      colorStyle = "w-[100px] h-[68px] bg-white rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'White-2':
      colorStyle = "w-[100px] h-[68px] bg-[#B5B5B5] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Gray':
      colorStyle = "w-[100px] h-[68px] bg-[#767379] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Gray-blue':
      colorStyle = "w-[100px] h-[68px] bg-[#435077] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Blue':
      colorStyle = "w-[100px] h-[68px] bg-[#26266F] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Purple-1':
      colorStyle = "w-[100px] h-[68px] bg-[#31275D] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Pink-1':
      colorStyle = "w-[100px] h-[68px] bg-[#c571b0] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Pink-2':
      colorStyle = "w-[100px] h-[68px] bg-[#805491] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Magenta':
      colorStyle = "w-[100px] h-[68px] bg-[#4F3A75] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Purple-2':
      colorStyle = "w-[100px] h-[68px] bg-[#483C7B] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
    case 'Burgundy':
      colorStyle = "w-[100px] h-[68px] bg-[#4D2468] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break; 
    case 'Purple-3':
      colorStyle = "w-[100px] h-[68px] bg-[#3E275D] rounded-[28px] shadow-[0px_10px_0px_10px_rgba(0,0,0,0.50)] border-2 border-[#352d68] mx-[10px]";
      Tag = 'div'; 
      break;
  }

  return (
    <Tag className={colorStyle}>
    </Tag>
  );
};

export default Color;
