import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IInputAvailableAlbums {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

export default function InputAvailableAlbums({
  setValue,
  options,
}: IInputAvailableAlbums) {
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Albums" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
