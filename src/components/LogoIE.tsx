
import React from "react";

interface LogoIEProps {
  size?: number;
  src?: string; // Adicionado para personalização futura
}

const LogoIE: React.FC<LogoIEProps> = ({ size = 40, src }) => (
  <div className="flex items-center justify-center">
    {/* Container facilmente customizável: basta mudar a prop 'src' */}
    <img
      src={
        src ||
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop"
      }
      alt="Logo da IE"
      width={size}
      height={size}
      className="rounded-full shadow-sm border bg-white object-cover"
      draggable={false}
    />
  </div>
);

export default LogoIE;
