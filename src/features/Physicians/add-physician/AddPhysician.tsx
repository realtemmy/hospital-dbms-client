import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { Check, ChevronsUpDown, Mail, Phone, Award, Building2 } from "lucide-react";
import { cn } from "../../../lib/utils";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

// Mock data - Replace with actual API data
const existingPhysicians = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    specialization: "Cardiology",
    licenseNumber: "MD123456",
    email: "sarah.wilson@hospital.com",
    phone: "+1 (555) 123-4567",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    hospital: "General Hospital",
    experience: "15 years",
    education: "MD, Harvard Medical School",
  },
  {
    id: "2",
    name: "Dr. Michael Brown",
    specialization: "Neurology",
    licenseNumber: "MD789012",
    email: "michael.brown@hospital.com",
    phone: "+1 (555) 234-5678",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    hospital: "City Medical Center",
    experience: "12 years",
    education: "MD, Johns Hopkins University",
  },
  {
    id: "3",
    name: "Dr. Emily Davis",
    specialization: "Pediatrics",
    licenseNumber: "MD345678",
    email: "emily.davis@hospital.com",
    phone: "+1 (555) 345-6789",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    hospital: "Children's Hospital",
    experience: "8 years",
    education: "MD, Stanford University",
  },
];

const formSchema = z.object({
  physicianId: z.string({
    required_error: "Please select a physician",
  }),
});

type PhysicianFormValues = z.infer<typeof formSchema>;

interface AddPhysicianProps {
  onSubmit?: (values: PhysicianFormValues) => Promise<void>;
  onCancel?: () => void;
}

const AddPhysician = ({ onSubmit, onCancel }: AddPhysicianProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedPhysician, setSelectedPhysician] = useState<typeof existingPhysicians[0] | null>(null);

  const form = useForm<PhysicianFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      physicianId: "",
    },
  });

  const handlePhysicianSelect = (physician: typeof existingPhysicians[0]) => {
    setSelectedPhysician(physician);
    form.setValue("physicianId", physician.id);
  };

  const handleSubmit = async (values: PhysicianFormValues) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      toast.success("Physician added successfully");
      form.reset();
      setSelectedPhysician(null);
    } catch (error) {
      console.error("Error adding physician:", error);
      toast.error("Failed to add physician");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Add New Physician</h2>
        <p className="text-muted-foreground">
          Search for an existing physician to add to the hospital.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="physicianId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Search Physician</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {selectedPhysician ? selectedPhysician.name : "Search physician..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search by name, specialization, or license number..." />
                      <CommandEmpty>No physician found.</CommandEmpty>
                      <CommandGroup>
                        {existingPhysicians.map((physician) => (
                          <CommandItem
                            key={physician.id}
                            value={physician.name}
                            onSelect={() => {
                              handlePhysicianSelect(physician);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedPhysician?.id === physician.id ? "opacity-100" : "opacity-0"
                              )}
                            />
                            <div className="flex flex-col">
                              <span>{physician.name}</span>
                              <span className="text-sm text-muted-foreground">
                                {physician.specialization} - {physician.licenseNumber}
                              </span>
                            </div>
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

          {selectedPhysician && (
            <Card>
              <CardHeader>
                <CardTitle>Physician Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedPhysician.image} alt={selectedPhysician.name} />
                    <AvatarFallback>{selectedPhysician.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{selectedPhysician.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedPhysician.specialization}</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{selectedPhysician.licenseNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedPhysician.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedPhysician.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedPhysician.hospital}</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p><span className="font-medium">Experience:</span> {selectedPhysician.experience}</p>
                  <p><span className="font-medium">Education:</span> {selectedPhysician.education}</p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                if (onCancel) onCancel();
              }}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding Physician..." : "Add Physician"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddPhysician;
