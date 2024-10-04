import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  sectorItem: string;
  field: ControllerRenderProps<FieldValues, "serviceSector">;
};

export default function ServiceSectorCheckbox({ sectorItem, field }: Props) {
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(sectorItem)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, sectorItem]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== sectorItem)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{sectorItem}</FormLabel>
    </FormItem>
  );
}
