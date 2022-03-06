import React from "react";

type HeroProps = {
  children: React.ReactNode;
  className?: string;
};

export function Hero(props: HeroProps) {
  return (
    <div className={props.className}>
      <div className="pt-4 justify-center flex">
        <div className="border border-black border-solid w-1/2 h-20 flex flex-col items-center justify-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
