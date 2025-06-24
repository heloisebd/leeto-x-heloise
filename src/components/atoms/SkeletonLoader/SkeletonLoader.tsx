import React from 'react';

interface Props {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  className?: string;
}

const SkeletonLoader: React.FC<Props> = ({
  width = '100%',
  height = 50,
  rounded = true,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={`
        bg-gray-200 
        animate-pulse 
        ${rounded ? 'rounded-md' : ''} 
        ${className}
      `}
      style={{ width, height }}
      {...rest}
    />
  );
};

export default SkeletonLoader;
