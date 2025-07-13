interface VisionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function VisionCard({ title, description, icon }: VisionCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-[#3F7F94] rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
          {icon}
        </div>
      </div>
      <h4 className="text-2xl md:text-3xl text-white mb-4">
        {title}
      </h4>
      <p className="text-lg md:text-xl text-white leading-relaxed">
        {description}
      </p>
    </div>
  );
} 