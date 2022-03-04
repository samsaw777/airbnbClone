import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="Large Card Image"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-32 left-12">
        <p className="text-4xl mb-3 w-64">{title}</p>
        <p>{description}</p>
        <p className="text-sm text-white w-fit bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </p>
      </div>
    </div>
  );
};

export default LargeCard;
