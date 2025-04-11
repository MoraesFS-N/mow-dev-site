import ReturnIcon from "./ReturnButton";

export default function HeaderTemplate() {
  return (
    <div className="flex flex-row justify-start items-start cursor-pointer w-full p-2">
      <ReturnIcon />
    </div>
  );
}
