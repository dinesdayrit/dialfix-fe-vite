import { serviceSectorList } from "@/config/service-sector-config";
import { Label } from "../ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "../ui/button";

type Props = {
  onChange: (sectors: string[]) => void;
  selectedSectors: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

export default function ServiceSectorFilter({
  onChange,
  selectedSectors,
  isExpanded,
  onExpandedClick,
}: Props) {
  const handleSectorsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedSector = event.target.value;
    const isChecked = event.target.checked;

    const newCuisinesList = isChecked
      ? [...selectedSectors, clickedSector]
      : selectedSectors.filter((sector) => sector !== clickedSector);

    onChange(newCuisinesList);
  };

  const handleSectorsReset = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Sector</div>
        <div
          onClick={handleSectorsReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {serviceSectorList
          .slice(0, isExpanded ? serviceSectorList.length : 7)
          .map((sector) => {
            const isSelected = selectedSectors.includes(sector);

            return (
              <div className="flex">
                <input
                  id={`sector_${sector}`}
                  type="checkbox"
                  className="hidden"
                  value={sector}
                  checked={isSelected}
                  onChange={handleSectorsChange}
                />
                <Label
                  htmlFor={`cuisine_${sector}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {sector}
                </Label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              Veiw Less
              <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              Veiw More
              <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
}
