import Photo from "@/models/Photo";
import { getPhotos } from "@/services/PhotoService";
import { PhotoState } from "@/store/slices/PhotoSlice";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";

export default function PhotosGrid() {
  const photos: PhotoState = useSelector((state: RootState) => state.photos);
  const { userId, albumId } = useParams();
  const [photoFromApi, setPhotosFromApi] = useState<Photo[]>([]);
  const navigate = useNavigate();

  const managePhotoToShow = () => {
    return [
      ...photos.photos.filter((ph) => ph.album === albumId),
      ...photoFromApi,
    ];
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      if (albumId) {
        const result = await getPhotos(albumId);
        setPhotosFromApi(result);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-5">
        <h2 className="text-start">
          Photos from the album {albumId} of the user {userId}
        </h2>
        <Button
          type="submit"
          className="w-30 m-0"
          onClick={() => navigate(`/user/${userId}/albums`)}
        >
          Back to Albums
        </Button>
      </div>
      <div className="w-[70vw] h-[80vh] bg-gray-100 p-5 rounded-2xl flex flex-wrap overflow-y-auto">
        {managePhotoToShow().map((photo, index) => (
          <div key={index} className="w-1/3 flex flex-col items-center gap-5">
            <p className="text-black">{photo.title}</p>
            <figure>
              <img src={photo.url} alt={photo.title} />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
