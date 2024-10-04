import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSections";
import { Separator } from "@/components/ui/separator";
import ServiceSectorSection from "./ServiceSectorSection";
import ServicesSection from "./ServicesSection";
import ImageSection from "./ImageSection";

const formSchema = z
  .object({
    serviceProviderName: z.string({
      required_error: "Service Provider name is required",
    }),
    city: z.string({
      required_error: "City is required",
    }),
    country: z.string({
      required_error: "Country is required",
    }),
    serviceSector: z.array(z.string()).nonempty({
      message: "Please select at least one cuisine",
    }),
    serviceItems: z.array(
      z.object({
        name: z.string().min(1, "Name is required"),
        price: z.coerce.number().min(1, "Price must be greater than zero"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type ServicesFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (servicesFormData: FormData) => void;
};

export default function ManageServicesForm({ onSave }: Props) {
  const form = useForm<ServicesFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceProviderName: "",
      city: "",
      country: "",
      serviceSector: [],
      serviceItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: ServicesFormData) => {
    const formData = new FormData();

    formData.append("serviceProviderName", formDataJson.serviceProviderName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formDataJson.serviceSector.forEach((serviceSector, index) => {
      formData.append(`serviceSector[${index}]`, serviceSector);
    });

    formDataJson.serviceItems.forEach((serviceItems, index) => {
      formData.append(`serviceItems[${index}][name]`, serviceItems.name);
      formData.append(
        `serviceItems[${index}][price]`,
        (serviceItems.price * 100).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    console.log(formDataJson);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container space-y-8 bg-gray-50 p-10 rounded-lg shadow-xl"
      >
        <DetailsSection />
        <Separator />
        <ServiceSectorSection />
        <Separator />
        <ServicesSection />
        <Separator />
        <ImageSection />
        <Separator />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
