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
import { AlbumIcon } from "lucide-react";
import Album from "@/models/Album";
import { useParams } from "react-router-dom";

export default function AlbumsTable() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { userId } = useParams();

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
    <Table className="bg-gray-100">
      <TableCaption>A list of all albums.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10rem] text-center">User Id</TableHead>
          <TableHead className="w-[10rem] text-center">Id</TableHead>
          <TableHead className="w-[10rem] text-center">Title</TableHead>
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
                <div className="cursor-pointer w-5">
                  <AlbumIcon />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
