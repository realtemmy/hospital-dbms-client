import { useState, forwardRef, useImperativeHandle } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Textarea } from "../../components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/ui/command";
import { cn } from "../../lib/utils";
import axiosService from "../../axios";

const appointmentTypes = [
  "General Checkup",
  "Follow-up",
  "Consultation",
  "Emergency",
  "Surgery",
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];

const formSchema = z.object({
  patientId: z.string({
    required_error: "Please select a patient",
  }),
  physicianId: z.string({
    required_error: "Please select a physician",
  }),
  appointmentType: z.string({
    required_error: "Please select appointment type",
  }),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  notes: z.string().optional(),
});

export type AppointmentFormValues = z.infer<typeof formSchema>;

export interface ScheduleAppointmentRef {
  reset: () => void;
  submit: () => Promise<void>;
  getValues: () => AppointmentFormValues;
}

interface ScheduleAppointmentProps {
  onSubmit?: (values: AppointmentFormValues) => Promise<void>;
}

const ScheduleAppointment = forwardRef<
  ScheduleAppointmentRef,
  ScheduleAppointmentProps
>(({ onSubmit }, ref) => {
  // const [, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [physicianOpen, setPhysicianOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  // =========== Data fetching ============ //
  const {
    data: patients,
    isLoading: patientLoading,
    // error,
    isError,
  } = useQuery({
    queryKey: ["users patients"],
    queryFn: async () => {
      const response = await axiosService.get("/user/patients");
      return response.data;
    },
  });

  const { data: physicians } = useQuery({
    queryKey: ["users physicians"],
    queryFn: async () => {
      const response = await axiosService.get("/physician");
      return response.data;
    },
  });

  // console.log(physicians)

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const handleSubmit = async (values: AppointmentFormValues) => {
    // setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      form.reset();
    } catch (error) {
      console.error("Error scheduling appointment:", error);
    } finally {
      // setIsSubmitting(false);
    }
  };

  useImperativeHandle(ref, () => ({
    reset: () => form.reset(),
    submit: async () => {
      const isValid = await form.trigger();
      if (isValid) {
        const values = form.getValues();
        await handleSubmit(values);
      }
    },
    getValues: () => form.getValues(),
  }));

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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
                        !field.value && "text-muted-foreground",
                        form.formState.errors.patientId &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                    >
                      {field.value
                        ? patients.find(
                            (patient: User) =>
                              patient.id.toString() === field.value
                          )?.fullName
                        : "Select patient..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search patient..." />
                      <CommandEmpty>No patient found.</CommandEmpty>
                      <CommandGroup>
                        {patientLoading ? (
                          <Loader2 className="animate-spin text-green-500" />
                        ) : isError ? (
                          <div>There was an error fetching users.</div>
                        ) : (
                          patients.map((patient: User) => (
                            <CommandItem
                              key={patient.id}
                              value={patient.fullName}
                              onSelect={() => {
                                form.setValue(
                                  "patientId",
                                  patient.id.toString(),
                                  {
                                    shouldValidate: true,
                                  }
                                );
                                setOpen(false);
                              }}
                            >
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <div className="truncate max-w-[calc(100vw-8rem)]">
                                {patient.fullName} ({patient.email})
                              </div>
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  field.value === patient.id.toString()
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))
                        )}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Physicians */}
          <FormField
            control={form.control}
            name="physicianId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Physician</FormLabel>
                <Popover open={physicianOpen} onOpenChange={setPhysicianOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={physicianOpen}
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                        form.formState.errors.physicianId &&
                          "border-red-500 focus-visible:ring-red-500"
                      )}
                    >
                      {field.value
                        ? physicians.find(
                            (physician: Physician) =>
                              physician.user.id.toString() === field.value
                          )?.user.fullName
                        : "Select physician..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search physician..." />
                      <CommandEmpty>No physician found.</CommandEmpty>
                      <CommandGroup>
                        {patientLoading ? (
                          <div className="flex justify-center p-4">
                            <Loader2 className="animate-spin text-green-500" />
                          </div>
                        ) : isError ? (
                          <div className="text-red-500 p-4">
                            There was an error fetching physicians.
                          </div>
                        ) : (
                          physicians.map((physician: Physician) => (
                            <CommandItem
                              key={physician.user.id}
                              value={physician.user.id.toString()}
                              onSelect={(currentValue) => {
                                form.setValue("physicianId", currentValue, {
                                  shouldValidate: true,
                                });
                                setPhysicianOpen(false);
                              }}
                            >
                              <Avatar className="mr-2 h-6 w-6">
                                <AvatarImage
                                  src={
                                    physician.user.photo ||
                                    "https://github.com/shadcn.png"
                                  }
                                  alt={physician.user.fullName}
                                />
                                <AvatarFallback>
                                  {physician.user.fullName
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="truncate max-w-[calc(100vw-8rem)]">
                                {physician.user.fullName} (
                                {physician.specialization})
                              </div>
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  field.value === physician.user.id.toString()
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))
                        )}
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
            name="appointmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appointment Type</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.trigger("appointmentType");
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {appointmentTypes.map((type) => (
                      <SelectItem
                        key={type}
                        value={type.split(" ")[0].toLocaleLowerCase()}
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover open={dateOpen} onOpenChange={setDateOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                          form.formState.errors.date &&
                            "border-red-500 focus-visible:ring-red-500"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          if (date) {
                            field.onChange(date);
                            form.trigger("date");
                            setDateOpen(false);
                          }
                        }}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.trigger("time");
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      placeholder="Add any additional notes or instructions..."
                      className="resize-none"
                      {...field}
                      ref={field.ref}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
});

ScheduleAppointment.displayName = "ScheduleAppointment";

export default ScheduleAppointment;
