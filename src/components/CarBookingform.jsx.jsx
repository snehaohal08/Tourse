import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CarBookingform() {
  return (
    <div className="w-full max-w-7xl mx-auto  bg-[#FAFAFA] relative sm:top-[-200px]">
      <Card className="w-full shadow-md">
        <CardContent className="p-6">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vehicle Type */}
            


            {/* Departure Date */}
            <div className="space-y-2">
  <Label className="text-sm font-semibold text-gray-600">DEPARTURE DATE</Label>
  <Input type="date" className="w-full border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-none" />
</div>


            {/* Pick Up Location */}
            <div className="space-y-2">
  <Label className="text-sm font-semibold text-gray-600">PICK UP LOCATION</Label>
  <Select>
    <SelectTrigger className="w-full bg-white border border-gray-300 rounded-none">
      <SelectValue placeholder="Select Location" />
    </SelectTrigger>
    <SelectContent className="bg-white rounded-none">
      <SelectItem value="airport" className="hover:bg-blue-400">Airport</SelectItem>
      <SelectItem value="downtown" className="hover:bg-blue-400">Downtown</SelectItem>
      <SelectItem value="hotel" className="hover:bg-blue-400">Hotel</SelectItem>
    </SelectContent>
  </Select>
</div>


            {/* Drop Off Location */}
            <div className="space-y-2">
  <Label className="text-sm font-semibold text-gray-600">PICK UP LOCATION</Label>
  <Select>
    <SelectTrigger className="w-full bg-white border border-gray-300 rounded-none">
      <SelectValue placeholder="Select Location" />
    </SelectTrigger>
    <SelectContent className="bg-white rounded-none">
      <SelectItem value="airport" className="hover:bg-blue-400">Airport</SelectItem>
      <SelectItem value="downtown" className="hover:bg-blue-400">Downtown</SelectItem>
      <SelectItem value="hotel" className="hover:bg-blue-400">Hotel</SelectItem>
    </SelectContent>
  </Select>
</div>


            {/* Number of People */}
            <div className="space-y-2 sm:col-span-2">
              <Label className="text-sm font-semibold text-gray-600">
                HOW MANY PEOPLES (INCLUDING CHILDREN)?
              </Label>
              <Input
                type="number"
                
                className="w-20 border-gray-300 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Return/One Way Radio */}
            <div className="space-y-2 flex items-end">
              <RadioGroup defaultValue="return" className="flex gap-6">
                <div className="flex items-center space-x-2">
                {/* <RadioGroupItem value="return" id="return" className="bg-transparent accent-orange-50 border-gray-300 checked:bg-orange-500 focus:ring-2 focus:ring-orange-400" /> */}
                <div className="space-y-2">
      <RadioGroupItem
        value="return"
        id="return"
        className="bg-transparent accent-orange-500 border-gray-300 checked:bg-orange-500 focus:ring-2 focus:ring-orange-400"
      >
        Return
      </RadioGroupItem>
      </div>
                <Label htmlFor="return" className="text-sm font-semibold  text-gray-600">
                    RETURN
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-way" id="one-way" />
                  <Label htmlFor="one-way" className="text-sm font-semibold text-gray-600">
                    ONE WAY
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Book Now Button */}
            <div className="mt-5 text-center md:text-left">
                  <a
                    href="#"
                    className="font-semibold text-[14px] bg-white transition-all duration-300 text-orange-500 px-9 py-2 rounded-full mt-4 hover:bg-orange-500 hover:text-white border-2 border-orange-500 inline-block"
                  >
                    BOOK NOW
                  </a>
                </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}