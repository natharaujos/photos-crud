import { Input } from "@/components/ui/input";

interface IInputPhotoTitle {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputPhotoTitle({ value, setValue }: IInputPhotoTitle) {
  return (
    <Input
      type="text"
      placeholder="Type the photo Title"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
