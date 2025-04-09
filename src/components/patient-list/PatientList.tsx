import { Dot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PatientList = () => {
  return (
    <Table>
      <TableCaption>A list of Doctor's patients.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="max-w-[250px]">Address</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Blood group</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Insurance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="max-w-[180px] flex items-center space-x-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="truncate">Temilolouwa Oreoluwa</span>
          </TableCell>
          <TableCell>Male</TableCell>
          <TableCell>8066771553</TableCell>
          <TableCell>temioluwaogunti8@gmail.com</TableCell>

          <TableCell
            className="max-w-[250px] truncate"
            title="3, road 103 Teachers estate, Oremeji, Ibafo, Ogun state"
          >
            <span>3, road 103 Teachers estate, Oremeji, Ibafo, Ogun state</span>
          </TableCell>
          <TableCell>25</TableCell>
          <TableCell>
            A<sup>+</sup>
          </TableCell>
          <TableCell className="flex items-center">
            <span>Active</span>
            <Dot color="green" />
          </TableCell>
          <TableCell>Yes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PatientList;
