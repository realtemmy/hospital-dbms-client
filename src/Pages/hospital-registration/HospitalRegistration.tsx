import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { toast } from "sonner";
import axios from "axios";

// Specialization options for the form
const specializationOptions = [
  { id: "general", label: "General Medicine" },
  { id: "cardiology", label: "Cardiology" },
  { id: "orthopedics", label: "Orthopedics" },
  { id: "neurology", label: "Neurology" },
  { id: "oncology", label: "Oncology" },
  { id: "pediatrics", label: "Pediatrics" },
  { id: "gynecology", label: "Gynecology" },
  { id: "psychiatry", label: "Psychiatry" },
  { id: "urology", label: "Urology" },
  { id: "dermatology", label: "Dermatology" },
];

// Accreditation options for the form
const accreditationOptions = [
  { id: "jci", label: "Joint Commission International (JCI)" },
  { id: "iso", label: "ISO Certification" },
  { id: "nabh", label: "National Accreditation Board for Hospitals" },
  {
    id: "carf",
    label: "Commission on Accreditation of Rehabilitation Facilities",
  },
  { id: "chap", label: "Community Health Accreditation Program" },
];

// 1. First define your form values type
export type HospitalFormValues = {
  name: string;
  type:
    | "public"
    | "private"
    | "general"
    | "teaching"
    | "specialized"
    | "research"
    | "community"
    | "other";
  specializations: string[];
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  bedCount: number;
  emergencyServices: boolean;
  operatingRooms: number;
  licenseNumber: string;
  taxId: string;
  accreditations: string[];
  description: string;
  yearEstablished: number;
  termsAccepted: boolean;
};

export const hospitalFormSchema: z.ZodType<HospitalFormValues> = z.object({
  name: z.string().min(3, {
    message: "Hospital name must be at least 3 characters.",
  }),
  type: z.enum(
    [
      "public",
      "private",
      "general",
      "teaching",
      "specialized",
      "research",
      "community",
      "other",
    ],
    {
      required_error: "Please select a hospital type.",
    }
  ),
  specializations: z.array(z.string()).nonempty({
    message: "Select at least one specialization.",
  }),

  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(6, { message: "Phone number is too short" }),
  website: z.string().url().or(z.literal("")),
  address: z.object({
    street: z.string().min(5, {
      message: "Street address must be at least 5 characters.",
    }),
    city: z.string().min(2, {
      message: "City name must be at least 2 characters.",
    }),
    state: z.string().min(2, {
      message: "State name must be at least 2 characters.",
    }),
    zip: z.string().min(6, {
      message: "Zip code must be at least 5 characters.",
    }),
    country: z.string().min(2, {
      message: "Country name must be at least 2 characters.",
    }),
  }),
  bedCount: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Bed count cannot be negative",
    })
  ),
  emergencyServices: z.boolean(),
  operatingRooms: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Number of operating rooms is required",
    })
  ),
  licenseNumber: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "license number is required",
    })
  ),
  taxId: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Tax ID is required",
    })
  ),
  accreditations: z.array(z.string()),
  description: z.string(),
  yearEstablished: z.number().min(1800).max(new Date().getFullYear()),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

const HospitalRegistration = () => {
  // Initialize the form with default values
  const form = useForm<HospitalFormValues>({
    resolver: zodResolver(hospitalFormSchema),
    defaultValues: {
      name: "",
      type: "public",
      specializations: [],
      email: "",
      phone: "",
      website: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      bedCount: 0,
      emergencyServices: false,
      operatingRooms: 0,
      licenseNumber: "",
      taxId: "",
      accreditations: [],
      description: "",
      yearEstablished: 2000,
      termsAccepted: false,
    },
  });

  // Form submission handler
  async function onSubmit(values: HospitalFormValues) {
    console.log(values);
    const response = await axios.post(
      "http://localhost:3001/api/v1/hospital",
      values
    );

    // toast.success(`Successfully registered ${values.name}`);
    console.log(response.data);
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Hospital Registration Form</CardTitle>
        <CardDescription>
          Enter the details of the hospital to register it in the database
          system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information Section */}
            <div>
              <h3 className="text-lg font-medium">Basic Information</h3>
              <Separator className="my-4" />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hospital Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter hospital name" {...field} />
                      </FormControl>
                      <FormDescription>
                        Official registered name of the hospital
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hospital Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select hospital type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">
                            General Hospital
                          </SelectItem>
                          <SelectItem value="specialized">
                            Spacialized Hospital
                          </SelectItem>
                          <SelectItem value="teaching">
                            Teaching Hospital
                          </SelectItem>
                          <SelectItem value="research">
                            Research Hospital
                          </SelectItem>
                          <SelectItem value="community">
                            SpeciaCOmmunitylized Hospital
                          </SelectItem>
                          <SelectItem value="private">
                            Private Hospital
                          </SelectItem>
                          <SelectItem value="public">
                            Public hospital
                          </SelectItem>
                          <SelectItem value="other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the type that best describes this hospital
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specializations"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Specializations</FormLabel>
                        <FormDescription>
                          Select all medical specializations offered by the
                          hospital
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                        {specializationOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="specializations"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              option.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Information Section */}
            <div>
              <h3 className="text-lg font-medium">Contact Information</h3>
              <Separator className="my-4" />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="hospital@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Official email address for hospital communications
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormDescription>
                        Main contact number for the hospital
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.hospital.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Official hospital website (if available)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h3 className="text-lg font-medium">Address</h3>
              <Separator className="my-4" />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123 Medical Center Blvd"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="address.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Cityville" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State/Province</FormLabel>
                        <FormControl>
                          <Input placeholder="California" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="address.zip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip/Postal Code</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Capacity & Services Section */}
            <div>
              <h3 className="text-lg font-medium">Capacity & Services</h3>
              <Separator className="my-4" />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="bedCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bed Count</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Total number of beds available
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="operatingRooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Operating Rooms</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Number of operating rooms
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergencyServices"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Emergency Services</FormLabel>
                        <FormDescription>
                          Hospital offers 24/7 emergency care
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Administrative Section */}
            <div>
              <h3 className="text-lg font-medium">
                Administrative Information
              </h3>
              <Separator className="my-4" />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="licenseNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Number</FormLabel>
                      <FormControl>
                        <Input placeholder="HSP-12345-XYZ" {...field} />
                      </FormControl>
                      <FormDescription>
                        Official hospital license number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="taxId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tax ID / EIN</FormLabel>
                      <FormControl>
                        <Input placeholder="12-3456789" {...field} />
                      </FormControl>
                      <FormDescription>
                        Tax identification number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearEstablished"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year Established</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Year the hospital was founded
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="accreditations"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Accreditations</FormLabel>
                        <FormDescription>
                          Select all accreditations the hospital has received
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {accreditationOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="accreditations"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...(field.value || []),
                                              option.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Additional Information Section */}
            <div>
              <h3 className="text-lg font-medium">Additional Information</h3>
              <Separator className="my-4" />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hospital Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Brief description of the hospital, its history, mission, etc."
                          className="h-32 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Maximum 500 characters</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <Separator className="my-4" />
              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Terms and Conditions</FormLabel>
                      <FormDescription>
                        I confirm that all information provided is accurate and
                        I have the authority to register this hospital.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <CardFooter className="flex justify-end px-0">
              <Button type="submit" className="w-full md:w-auto">
                Register Hospital
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default HospitalRegistration;
