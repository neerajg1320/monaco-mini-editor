import React from 'react';
import { useTheme } from '../../contexts/Theme.context';

const Signup: React.FC = () => {
  const { theme } = useTheme();
  console.log(`landing page`);
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="grid h-screen gap-6 items-end grid-rows-2 grid-cols-3 content-end background"
    >
      
    </div>
  )
}

export default Signup
