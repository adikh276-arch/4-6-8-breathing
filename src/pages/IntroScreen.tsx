import { useNavigate } from "react-router-dom";

const IntroScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-6">
        <h1 className="font-display text-4xl font-bold text-foreground leading-tight">
          4-6-8 Breathing Exercise
        </h1>

        <p className="font-subtitle text-lg text-foreground/80 italic">
          "Slow your body. Settle your mind."
        </p>

        <div className="w-full bg-card rounded-lg p-6 glow-soft">
          <p className="text-justified text-foreground/90 text-base leading-relaxed">
            This breathing technique helps calm your nervous system.
            Breathe in for 4 seconds, hold for 6 seconds, and exhale slowly for 8 seconds.
            Longer exhales signal safety to your body.
          </p>
        </div>

        <button
          onClick={() => navigate("/breathe")}
          className="w-full mt-4 py-4 px-8 bg-primary text-primary-foreground font-semibold text-lg rounded-full glow-soft hover:opacity-90 transition-opacity duration-200"
        >
          Begin Exercise
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
