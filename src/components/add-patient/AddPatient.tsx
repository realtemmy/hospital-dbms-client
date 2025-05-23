import { Trash } from "lucide-react";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";
import { format } from "date-fns";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.string({
    required_error: "Please select a gender",
  }),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits")
    .refine((val) => val.startsWith("0"), "Phone number must start with 0"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  // socials: z.array(
  //   z.object({
  //     title: z.string(),
  //     value: z.string(),
  //   })
  // ),
  // emergencyContacts: z.array(
  //   z.object({
  //     name: z
  //       .string()
  //       .min(2, "Emergency contact name must be at least 2 characters"),
  //     relationship: z
  //       .string()
  //       .min(2, "Relationship must be at least 2 characters"),
  //     phone: z
  //       .string()
  //       .min(11, "Phone number must be 11 digits")
  //       .max(11, "Phone number must be 11 digits")
  //       .regex(/^[0-9]+$/, "Phone number must contain only digits")
  //       .refine((val) => val.startsWith("0"), "Phone number must start with 0"),
  //     email: z.string().email({ message: "Invalid email address" }),
  //   })
  // ),
});

const AddPatient = () => {
  const [open, setOpen] = useState(false);
  const [emergencyValues, setEmergencyValues] = useState([
    {
      name: "",
      relationship: "",
      email: "",
      phone: "",
    },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      // emergencyContacts: [
      //   {
      //     name: "",
      //     relationship: "",
      //     phone: "",
      //     email: "",
      //   },
      // ],
    },
  });

  const handleAddEmergencyUser = () => {
    setEmergencyValues([
      ...emergencyValues,
      {
        name: "",
        relationship: "",
        email: "",
        phone: "",
      },
    ]);
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;

    setEmergencyValues((values) => {
      const newValues = [...values];
      newValues[index] = {
        ...newValues[index],
        [name]: value,
      };
      return newValues;
    });
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/auth/signup",
      {
        ...values,
        emergencyContacts: emergencyValues,
        role: "Patient",
      }
    );

    console.log("Response: ", res);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl">
            Create New User
          </CardTitle>
          <CardDescription>
            Enter the patient's information below. All fields marked with * are
            required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>

                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth *</FormLabel>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
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
                          <PopoverContent
                            className="z-[9999] w-auto p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(selectedDate) => {
                                field.onChange(selectedDate), setOpen(false);
                              }}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
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
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john.doe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="08012345678"
                            {...field}
                            pattern="^[0-9]{11}$"
                            maxLength={11}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter 11-digit phone number starting with 0
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter full address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Emergency Contact</h3>

                <div>
                  {emergencyValues.map((value, index) => (
                    <div
                      key={index}
                      className="flex w-full justify-between flex-wrap"
                    >
                      <div className="mb-4">
                        <Label htmlFor="name">Name: </Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          value={value.name}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="relationship">Relationship</Label>
                        <Input
                          type="text"
                          name="relationship"
                          id="relationship"
                          value={value.relationship}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={value.email}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Mobile number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={value.phone}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={handleAddEmergencyUser}
                  >
                    Add contact
                  </Button>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit">Create User</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddPatient;
