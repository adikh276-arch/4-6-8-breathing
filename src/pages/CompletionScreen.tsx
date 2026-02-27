import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompletionScreen = () => {
  const navigate = useNavigate();
  const [reflection, setReflection] = useState("");

  return (
    <div className="min-h-screen bg-muted flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      <div className="max-w-sm w-full flex flex-col items-center text-center gap-6 px-2">
        <h1 className="font-display text-4xl font-bold text-foreground">
          You did it.
        </h1>

        <div className="flex flex-col gap-2 text-foreground/85 text-lg leading-relaxed">
          <p>Notice your body.</p>
          <p>Is your breath slower?</p>
          <p>Is your chest softer?</p>
        </div>

        <div className="w-full mt-4 flex flex-col gap-3">
          <p className="font-subtitle text-foreground font-semibold">
            What feels different right now?
          </p>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Take a moment to reflect…"
            rows={3}
            className="w-full bg-card text-foreground rounded-lg p-4 text-base resize-none border-none outline-none focus:ring-2 focus:ring-ring placeholder:text-foreground/40"
          />
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 py-4 px-8 bg-primary text-primary-foreground font-semibold text-lg rounded-full glow-soft hover:opacity-90 transition-opacity duration-200"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;
