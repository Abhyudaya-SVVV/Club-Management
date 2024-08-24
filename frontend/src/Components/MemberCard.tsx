interface MemberCardProps {
    pic: string;
    name: string;
    onClick: (name: string, pic: string) => void;
  }
  
  const MemberCard: React.FC<MemberCardProps> = ({ pic, name, onClick }) => {
    const defaultPic = 'https://picsum.photos/200';
    const defaultName = 'John Doe';
  
    return (
      <div
        className="flex justify-evenly items-center p-2.5 w-64 h-11 rounded-[25px] bg-gray-100 shadow-md hover:bg-gray-200 cursor-pointer"
        onClick={() => onClick(name, pic)}
      >
        <img
          src={pic || defaultPic}
          alt="Profile Picture"
          className="w-10 h-10 rounded-full mr-2"
        />
        <h2 className="text-lg font-light">{name || defaultName}</h2>
      </div>
    );
  };
  
  export default MemberCard;