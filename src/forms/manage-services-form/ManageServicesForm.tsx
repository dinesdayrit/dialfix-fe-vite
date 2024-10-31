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
import { Services } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
    serviceProviderName: z.string({
      required_error: "Service Provider name is required",
    }),
    addressLine1: z.string({
      required_error: "Address is required",
    }),
    city: z.string({
      required_error: "City is required",
    }),
    country: z.string({
      required_error: "Country is required",
    }),
    serviceSector: z.array(z.string()).nonempty({
      message: "Please select at least one sector",
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
  services?: Services;
  isLoading: boolean;
};

export default function ManageServicesForm({
  onSave,
  services,
  isLoading,
}: Props) {
  const form = useForm<ServicesFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceProviderName: "",
      addressLine1: "",
      city: "",
      country: "",
      serviceSector: [],
      serviceItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!services) {
      return;
    }

    const serviceItemsFormatted = services.serviceItems.map((item) => ({
      ...item,
      price: parseInt((item.price / 100).toFixed(2)),
    }));

    const updatedServiceProvider = {
      ...services,
      serviceItems: serviceItemsFormatted,
    };

    form.reset(updatedServiceProvider);
  }, [form, services]);

  const onSubmit = (formDataJson: ServicesFormData) => {
    const formData = new FormData();

    formData.append("serviceProviderName", formDataJson.serviceProviderName);
    formData.append("addressLine1", formDataJson.addressLine1);
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
