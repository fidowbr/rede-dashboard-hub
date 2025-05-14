
import React from "react";

interface LogoIEProps {
  size?: number;
}

const LogoIE: React.FC<LogoIEProps> = ({ size = 40 }) => (
  <div className="flex items-center justify-center">
    {/* Placeholder logo image */}
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop"
      alt="Logo da IE"
      width={size}
      height={size}
      className="rounded-full shadow-sm border bg-white object-cover"
      draggable={false}
    />
  </div>
);

export default LogoIE;
