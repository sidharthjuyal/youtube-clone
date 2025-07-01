import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentine",
  "News",
  "India",
  "Russia",
  "USA",
  "France",
];

const ButtonList = () => {
  return (
    <div className="flex justify-center items-center overflow-x-scroll overflowing-div">
      {list.map((element, index) => {
        return <Button key={element + index} name={element} />;
      })}
    </div>
  );
};

export default ButtonList;
