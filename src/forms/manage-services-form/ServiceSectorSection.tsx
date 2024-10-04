import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { serviceSectorList } from "@/config/service-sector-config";
import { useFormContext } from "react-hook-form";
import ServiceSectorCheckbox from "./ServiceSectorCheckbox";

export default function ServiceSectorSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Sector</h2>
        <FormDescription>Select sector of your services.</FormDescription>
      </div>
      <FormField
        control={control}
        name="serviceSector"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {serviceSectorList.map((sectorItem, index) => (
                <ServiceSectorCheckbox
                  key={index}
                  sectorItem={sectorItem}
                  field={field}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
