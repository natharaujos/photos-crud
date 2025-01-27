import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAlbumByUserId } from "@/services/UserService";
import { useEffect, useState } from "react";
import { SkipBackIcon, PlusIcon, ImageIcon } from "lucide-react";
import Album from "@/models/Album";
import { useNavigate, useParams } from "react-router-dom";
import TooltipPersonalized from "@/shared/components/Tooltip/Tooltip";
import ModalAddPhoto from "../ModalAddPhoto/ModalAddPhoto";

export default function AlbumsTable() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { userId } = useParams();
  const navigate = useNavigate();
  const albumsIds = albums.map((album) => {
    return album.id.toString();
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      if (userId) {
        const result = await getAlbumByUserId(userId);
        setAlbums(result);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <>
      <Table className="bg-gray-100">
        <TableCaption>A list of all albums from the user {userId}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10rem] text-center">User Id</TableHead>
            <TableHead className="w-[10rem] text-center">Id</TableHead>
            <TableHead className="w-[10rem] text-center">Title</TableHead>
            <TableHead className="w-[10rem] text-center">Options</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {albums?.map((album) => (
            <TableRow>
              <TableCell className="font-medium">{album.userId}</TableCell>
              <TableCell>{album.id}</TableCell>
              <TableCell>{album.title}</TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <div className="cursor-pointer flex justify-center gap-3">
                    <TooltipPersonalized message={"Back to Users Page"}>
                      <SkipBackIcon
                        onClick={() => navigate("/user")}
                        className="w-5"
                      />
                    </TooltipPersonalized>
                    <TooltipPersonalized message={"Add Photo"}>
                      <PlusIcon
                        onClick={() => setOpenModal(true)}
                        className="w-5"
                      />
                    </TooltipPersonalized>
                    <TooltipPersonalized message={"See Photos"}>
                      <ImageIcon
                        onClick={() =>
                          navigate(`/user/${userId}/albums/${album.id}/photos`)
                        }
                        className="w-5"
                      />
                    </TooltipPersonalized>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ModalAddPhoto
        open={openModal}
        setOpen={setOpenModal}
        albums={albumsIds}
      />
    </>
  );
}
