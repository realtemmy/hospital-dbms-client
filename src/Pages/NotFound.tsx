import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { ErrorIllustration } from "../components/ui/error-illustration";

const NotFound = () => {
  const [count, setCount] = useState(5);

  // Auto redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background p-4 md:p-8">
      <div className="w-full max-w-md mx-auto">
        <ErrorIllustration className="w-full max-w-[200px] md:max-w-[300px] h-auto mx-auto mb-6" />
        
        <div className="text-center space-y-2">
          <h1 className="text-6xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="relative h-1.5 w-full max-w-xs mx-auto bg-muted/50 rounded-full overflow-hidden mb-4">
            <div 
              className="absolute inset-0 h-full bg-primary rounded-full transition-all duration-300 ease-in-out" 
              style={{ width: `${(count / 5) * 100}%` }}
            />
          </div>
          
          <p className="text-sm text-muted-foreground mb-8">
            Redirecting to home in <span className="font-semibold">{count}</span> {count === 1 ? 'second' : 'seconds'}...
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 