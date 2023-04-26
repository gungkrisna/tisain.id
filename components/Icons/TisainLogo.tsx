import React from 'react';

interface TisainLogoProps {
  className?: string;
  size?: number;
  dark?: boolean;
}

const TisainLogo: React.FC<TisainLogoProps> = ({ className = '', size = 1, dark = false }) => {
  const fillColor = dark ? '#000' : '#fff';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.47549438 327.30999756" className={className} style={{ width: `${size}rem` }}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <text className="font-montserrat tracking-wide font-extralight text-[5.08rem]" style={{ fill: fillColor }} transform="matrix(.92 0 0 1 0 228.21)">
            TISA<tspan className="font-semibold" style={{ fill: fillColor }}>IN.ID</tspan>
          </text>
          <path style={{ fill: fillColor }} d="m10.93 243.25 101.91 84.06v-10.89L10.93 243.25zM214.75 243.25l-101.91 84.06v-10.89l101.91-73.17zM13.25 66.05 112.84 0v8.56L13.25 66.05zM212.43 66.05 112.84 0v8.56l99.59 57.49z" />
          <path style={{ fill: 'none', stroke: fillColor, strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '3px' }} d="M101.31 113.36H81.12v44.42h63.44v-44.42h-20.31" />
          <path style={{ fill: 'none', stroke: fillColor, strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '3px' }} d="M106.27 104.51v32.71l6.83 8.61 6.3-8.85v-32.47a7.5 7.5 0 0 0-13.13 0ZM107.17 108.42H118.89M113.03 109.36v27.34M107.87 137.12h10.59M112.81 162.83v5.45M125.64 168.28h-25.61" />
        </g>
      </g>
    </svg>
  );
};

export default TisainLogo;
