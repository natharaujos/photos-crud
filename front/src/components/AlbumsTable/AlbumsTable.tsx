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
import { SkipBackIcon } from "lucide-react";
import Album from "@/models/Album";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import StateUser from "@/shared/interfaces/StateUser";
import TooltipPersonalized from "@/shared/components/Tooltip/Tooltip";

export default function AlbumsTable() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { userId } = useParams();
  const { state } = useLocation() as StateUser;
  const navigate = useNavigate();

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
      <TableCaption>
        A list of all albums from the user {state.email}
      </TableCaption>
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
                <div className="cursor-pointer w-5">
                  <TooltipPersonalized message={"Back to Users Page"}>
                    <SkipBackIcon
                      onClick={() => navigate("/user")}
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
  );
}
