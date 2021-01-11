const DropDown = ({ data, render, className }: any) => (
  <div>
    <ul
      className={`drop-down absolute  bg-white  shadow-xl  text-black z-50 flex flex-col ${className}`}
    >
      {data.map((d) => render(d))}
    </ul>
  </div>
);

export default DropDown;
