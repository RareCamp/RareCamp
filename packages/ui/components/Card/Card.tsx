type CardProps = {
  title: string
  description: string
  icon: any
  className: string
}

const Card = ({ title, description, icon, className }: CardProps) => (
  <div className="bg-white w-1/4 px-4 py-2 mr-4 mt-4 rounded">
    <h1 className="font-medium">{title}</h1>
    <p
      className={`text-sm text-gray-500 mt-4 font-extralight ${className}`}
    >
      {description}
    </p>
    <div className="flex  mt-4 items-center">
      <div>{icon}</div>
    </div>
  </div>
)

export default Card
