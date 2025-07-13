interface BulletPointProps {
  text: string;
}

export default function BulletPoint({ text }: BulletPointProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-4 h-4 text-white flex-shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      <span className="text-lg text-white whitespace-nowrap">{text}</span>
    </div>
  );
} 