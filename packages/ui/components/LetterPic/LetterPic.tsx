const LetterPic = ({ letter }: { letter: string }) => (
  <li className="flex flex-col justify-between mr-2 w-6 h-6 rounded-full bg-blue-200 px-1">
    <span className="m-auto text-xs text-blue-600">{letter}</span>
  </li>
);
export default LetterPic;
