import Image from "next/image";

interface Props {
  img: string;
  title: string;
}

const MediumCard = ({ img, title }: Props) => {
  return (
    <div className="flex flex-col space-y-3 cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          layout="fill"
          alt="Medium Card Image"
          className="rounded-lg"
        />
      </div>
      <div className="flex text-lg font-medium">{title}</div>
    </div>
  );
};

export default MediumCard;
