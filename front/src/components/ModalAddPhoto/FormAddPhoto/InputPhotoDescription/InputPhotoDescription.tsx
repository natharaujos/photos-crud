import { Input } from "@/components/ui/input";

interface IInputPhotoDescription {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputPhotoDescription({
  value,
  setValue,
}: IInputPhotoDescription) {
  return (
    <Input
      type="text"
      placeholder="Type the photo description"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
