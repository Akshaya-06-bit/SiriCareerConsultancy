import React from "react";

export default function BajajFinanceLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Bajaj_Finance_Logo.svg"
      alt="Bajaj Finance"
      className={className}
      loading="lazy"
    />
  );
}
