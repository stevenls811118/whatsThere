import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

export default function DatePicker() {
  
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div>
      <div>
        <div className="text-center text-lg font-bold p-2">
          <a>Select Days of Travel</a>
        </div>
        <div className=" w-1 h-1">
          <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            retainEndDateOnFirstSelection={false}
            ranges={state}
          />
        </div>
      </div>
    </div>
  )
};