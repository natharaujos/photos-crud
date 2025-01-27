import { Input } from "@/components/ui/input";

interface IInputUrl {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputPhotoUrl({ value, setValue }: IInputUrl) {
  return (
    <Input
      type="text"
      placeholder="Type the photo url"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
