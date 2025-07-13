interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="text-center md:text-left">
      <div className="flex flex-col items-center mb-4">
        <div className="w-12 h-12 bg-[#82BED2] rounded-full flex items-center justify-center mb-3 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h4 className="text-xl text-gray-800 mb-2 text-center">{title}</h4>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
} 