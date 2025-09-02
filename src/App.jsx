import { useState } from "react";

export default function App() {
    const generateRandom = () => {
        return Math.floor(Math.random() * 100) + 1;
    }
    const [numberToGuess , setNumberToGuess] = useState(generateRandom);
    const [guess , setGuess] = useState("");
    const [message , setMessage] = useState("");
    const [attempts , setAttempts] = useState("");

    function handelGuess() {
        const num = Number(guess);

        if(guess === "" || isNaN(num) || num < 0 || num > 100){
            setMessage("Please enter a number between 1 and 100");
            return;
        }

        setAttempts(attempts + 1);

        if(num === numberToGuess){
            setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts`)
            return;
        }
        else if(num < numberToGuess){
            setMessage("Too low! Try again");
        }
        else{
            setMessage("Too high! Try again");
        }
        
    }

    function handelResetGame() {
        setNumberToGuess(generateRandom());
        setMessage("");
        setGuess("");
        setAttempts(0);
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div
                className="flex flex-col gap-5 justify-center items-center"
            >
                <h2 className="text-center font-bold text-2xl">Guess the Number</h2>
                <input
                    placeholder="Enter a number between 1 and 100"
                    className="w-[330px] p-4 rounded-2xl outline-0 border border-gray-500"
                    id="guess-input"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />

                <div className="flex gap-4">
                    <button onClick={handelGuess} className="border py-2 px-4 rounded-xl bg-neutral-200">Ckeck Guess</button>
                    <button onClick={handelResetGame} className="border py-2 px-4 rounded-xl bg-neutral-200">Reset Game</button>
                </div>
                
                <p className="mt-5 font-medium text-xl">{message}</p>
            </div>
        
        </div>
    );
}
