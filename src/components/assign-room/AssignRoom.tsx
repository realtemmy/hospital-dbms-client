import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "../../lib/utils";

// Mock data - Replace with actual API calls
const patients = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "https://github.com/shadcn.png",
  },
];

const rooms = [
  { id: "101", number: "101", type: "Standard", status: "Available" },
  { id: "102", number: "102", type: "Deluxe", status: "Available" },
  { id: "103", number: "103", type: "ICU", status: "Available" },
  { id: "104", number: "104", type: "Standard", status: "Occupied" },
];

const formSchema = z.object({
  patientId: z.string({
    required_error: "Please select a patient",
  }),
  roomId: z.string({
    required_error: "Please select a room",
  }),
  notes: z.string().optional(),
});

export type AssignRoomFormValues = z.infer<typeof formSchema>;

interface AssignRoomProps {
  onSubmit?: (values: AssignRoomFormValues) => void;
}

const AssignRoom: React.FC<AssignRoomProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);

  const form = useForm<AssignRoomFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientId: "",
      roomId: "",
      notes: "",
    },
  });

  const handleSubmit = (values: AssignRoomFormValues) => {
    console.log(values);
    onSubmit?.(values);
  };

  return (
    <Card className="border-none shadow-none p-0">
      <CardHeader>
        {/* <CardTitle>Assign Patient to Room</CardTitle>
        <CardDescription>
          Select a patient and assign them to an available room
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="patientId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Patient</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? patients.find(
                              (patient) => patient.id === field.value
                            )?.name
                          : "Select patient..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w p-0">
                      <Command>
                        <CommandInput placeholder="Search patient..." />
                        <CommandEmpty>No patient found.</CommandEmpty>
                        <CommandGroup>
                          {patients.map((patient) => (
                            <CommandItem
                              key={patient.id}
                              value={patient.name}
                              onSelect={() => {
                                form.setValue("patientId", patient.id, {
                                  shouldValidate: true,
                                });
                                setOpen(false);
                              }}
                              className="flex items-center gap-2"
                            >
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={patient.avatar}
                                  alt={patient.name}
                                />
                                <AvatarFallback>
                                  {patient.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col">
                                <span>{patient.name}</span>
                                <span className="text-sm text-muted-foreground">
                                  {patient.email}
                                </span>
                              </div>
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  field.value === patient.id
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="roomId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a room" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {rooms
                        .filter((room) => room.status === "Available")
                        .map((room) => (
                          <SelectItem key={room.id} value={room.id}>
                            Room {room.number} - {room.type}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Assign Room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AssignRoom;
