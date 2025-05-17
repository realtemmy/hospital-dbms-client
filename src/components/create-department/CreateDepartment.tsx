import { forwardRef, useImperativeHandle } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent } from "../ui/card";
// import { toast } from "sonner";

const departmentFormSchema = z.object({
  name: z.string().min(2, {
    message: "Department name must be at least 2 characters.",
  }),
  headOfDepartment: z.string().min(2, {
    message: "Head of department name must be at least 2 characters.",
  }),
  staffCount: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Staff count must be a positive number.",
    }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  contact: z.string().email({
    message: "Please enter a valid email address.",
  }),
  status: z.enum(["active", "inactive"], {
    required_error: "Please select a status.",
  }),
});

export type DepartmentFormValues = z.infer<typeof departmentFormSchema>;

export interface createDeptRef {
  reset: () => void;
  submit: () => Promise<void>;
  getValues: () => DepartmentFormValues;
}

type createDeptProps = {
  onSubmit?: (data: DepartmentFormValues) => Promise<void>;
};

const CreateDepartment = forwardRef<createDeptRef, createDeptProps>(
  ({ onSubmit }: createDeptProps, ref) => {
    const form = useForm<DepartmentFormValues>({
      resolver: zodResolver(departmentFormSchema),
      defaultValues: {
        name: "",
        headOfDepartment: "",
        staffCount: "",
        description: "",
        contact: "",
        status: "active",
      },
    });

    const handleSubmit = async (values: DepartmentFormValues) => {
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
      <div className="container max-w-2xl mx-auto py-8">
        <Card className="border-none shadow-none p-0">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter department name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="headOfDepartment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Head of Department</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter head of department name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="staffCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Staff Count</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter number of staff"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter department description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter contact email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <div className="flex justify-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/departments")}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Department</Button>
              </div> */}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    );
  }
);

export default CreateDepartment;
