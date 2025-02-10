import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-[#C25B3F] transition-all duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}