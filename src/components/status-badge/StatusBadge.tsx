import { Clock, Check, X } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const StatusBadge = ({ status }: { status: string }) => {
  const statusStyles = {
    scheduled: "bg-blue-100 text-blue-800 border-blue-200",
    confirmed: "bg-green-100 text-green-800 border-green-200",
    completed: "bg-purple-100 text-purple-800 border-purple-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
    noshow: "bg-gray-100 text-gray-800 border-gray-200",
  };

  const statusIcons = {
    scheduled: <Clock className="h-3 w-3 mr-1" />,
    confirmed: <Check className="h-3 w-3 mr-1" />,
    completed: <Check className="h-3 w-3 mr-1" />,
    cancelled: <X className="h-3 w-3 mr-1" />,
    noshow: <X className="h-3 w-3 mr-1" />,
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "flex items-center gap-1 font-normal border px-2 py-1",
        statusStyles[status] || ""
      )}
    >
      {statusIcons[status]}
      <span className="capitalize">{status}</span>
    </Badge>
  );
};

export default StatusBadge;
