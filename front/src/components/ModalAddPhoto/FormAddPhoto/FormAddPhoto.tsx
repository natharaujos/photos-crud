import { useState } from "react";
import InputPhotoUrl from "./InputPhotoUrl/InputPhotoUrl";
import InputAvailableAlbums from "./InputAvailableAlbums/InputAvailableAlbums";
import { Button } from "@/components/ui/button";
import Photo from "@/models/Photo";
import { useDispatch } from "react-redux";
import { addPhoto } from "@/store/slices/PhotoSlice";
import InputPhotoTitle from "./InputPhotoTitle/InputPhotoTitle";

interface IFormAddPhoto {
  albums: string[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormAddPhoto({ albums, setOpen }: IFormAddPhoto) {
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [photoTitle, setPhotoTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const dispatch = useDispatch();

  const managePhoto = () => {
    const photo: Photo = {
      title: photoTitle,
      album: album,
      url: photoUrl,
    };

    dispatch(addPhoto(photo));
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-col gap-5">
        <InputPhotoUrl value={photoUrl} setValue={setPhotoUrl} />
        <InputPhotoTitle value={photoTitle} setValue={setPhotoTitle} />
        <InputAvailableAlbums setValue={setAlbum} options={albums} />
      </div>
      <div className="w-full flex justify-center gap-5">
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button type="submit" onClick={() => managePhoto()}>
          Add Photo
        </Button>
      </div>
    </div>
  );
}
