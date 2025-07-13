import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  icon: React.ReactNode;
  href?: string;
}

export default function ServiceCard({ title, description, bgColor, iconBgColor, icon, href }: ServiceCardProps) {
  const content = (
    <div className={`flex-1 ${bgColor} p-8 md:p-12 transition-all duration-300 hover:cursor-pointer`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex-1 text-white">
          <h4 className="text-2xl md:text-3xl mb-3 hover:underline transition-all duration-300">{title}</h4>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 md:w-20 md:h-20 ${iconBgColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white/20`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex-1 block">
        {content}
      </Link>
    );
  }

  return content;
} 