"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const handleChange = (value: string) => {
    switch (value) {
      case "AC":
        setInput("");
        break;
      case "C":
        setInput(input.slice(0, -1));
        break;
      case "=":
        const tRisultato = eval(input);
        setInput(isNaN(tRisultato) ? "0" : tRisultato);
        break;
      case "±":
        setInput(input[0] === "-" ? input.slice(1) : "-" + input);
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 320px)");
    if (mediaQuery.matches) {
      document.write("<h1>Dispositivo Non supportato</h1>");
      return;
    }
  }, []);

  return (
    <main className="flex flex-col items-center w-screen h-screen justify-center">
      <div>
        <h1 className="text-white text-3xl md:text-6xl pl-6 pb-6">{input}</h1>

        {/* Input */}
        <div className="flex gap-4 sm:text-xl md:text-3xl ml-1">
          {["AC", "C", "±"].map((op) => (
            <button
              key={op}
              className="bg-[#D4D4D2] p-3 rounded-full hover:bg-[#d4d4d259] text-white w-20 h-20"
              onClick={() => handleChange(op)}
            >
              {op}
            </button>
          ))}
          <button
            className="bg-[#FF9500] p-[17px] rounded-full hover:bg-[#ff950055] mb-1 -ml-1 text-white w-20 h-20 "
            onClick={() => handleChange("/")}
          >
            ÷
          </button>
        </div>

        <div className="flex">
          {/* Numeri */}
          <div className="grid grid-cols-3 grid-rows-4 gap-2 text-2xl">
            {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((n) => (
              <button
                key={n}
                className="bg-[#1C1C1C] m-1 p-3 rounded-full hover:bg-[#4f4f4fca] text-white w-20 h-20"
                onClick={() => handleChange(n)}
                value={n}
              >
                {n}
              </button>
            ))}
            <button
              className="col-span-2 bg-[#1C1C1C] p-4 rounded-full hover:bg-[#4f4f4fca] text-white w-41 h-20 ml-1 mr-1"
              onClick={() => handleChange("0")}
              value={0}
            >
              0
            </button>
            <button
              className="bg-[#1C1C1C] p-4 rounded-full hover:bg-[#4f4f4fca]  text-white w-20 h-20 ml-1"
              onClick={() => handleChange(".")}
              value=","
            >
              ,
            </button>
          </div>

          {/* Operazioni matematiche */}
          <div className="flex flex-col gap-4 text-2xl ml-2">
            <button
              className="bg-[#FF9500] rounded-full  hover:bg-[#ff950055] text-white w-20 h-20 "
              onClick={() => handleChange("*")}
              value="*"
            >
              x
            </button>
            {["-", "+", "="].map((op) => (
              <button
                key={op}
                className="bg-[#FF9500] rounded-full  hover:bg-[#ff950055] text-white w-20 h-20"
                onClick={() => handleChange(op)}
                value={op}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
