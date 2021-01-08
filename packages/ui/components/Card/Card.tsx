type CardProps = {
  title: string;
  description: string;
  time: string;
  icon: any;
  className: string;
};

const Card = ({
  title,
  description,
  time,
  icon,
  className,
}: CardProps) => {
  return (
    <div className="bg-white w-1/4 px-4 py-2 mr-4 mt-4 rounded">
      <h1 className="font-medium">{title}</h1>
      <p className={`text-sm text-gray-500 mt-4 ${className}`}>
        {description}
      </p>
      <div className="flex justify-between mt-4 items-center">
        <span className="text-gray-400 text-xs">{time}</span>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Card;
