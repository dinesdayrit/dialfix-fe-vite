import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import ServiceItemInput from "./ServiceItemInput";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "serviceItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Services</h2>
        <FormDescription>
          Add your Service and give each item a name and starting rate
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="serviceItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <ServiceItemInput
                key={index}
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button type="button" onClick={() => append({ name: "", price: "" })}>
        Add Menu Item
      </Button>
    </div>
  );
}
