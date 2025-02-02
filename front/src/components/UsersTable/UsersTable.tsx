import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import User from "@/models/User";
import { getUsers } from "@/services/UserService";
import { useEffect, useState } from "react";
import { AlbumIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StateUser from "@/shared/interfaces/StateUser";
import TooltipPersonalized from "@/shared/components/Tooltip/Tooltip";

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUsers();
      setUsers(result);
    };

    fetchUsers();
  }, []);

  return (
    <Table className="bg-gray-100">
      <TableCaption>A list of all users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10rem] text-center">Username</TableHead>
          <TableHead className="w-[10rem] text-center">Email</TableHead>
          <TableHead className="w-[10rem] text-center">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <div className="flex justify-end">
                <div className="cursor-pointer w-5">
                  <TooltipPersonalized message={"Albums"}>
                    <AlbumIcon
                      onClick={() =>
                        navigate(`/user/${user.id}/albums`, {
                          state: user,
                        } as StateUser)
                      }
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
