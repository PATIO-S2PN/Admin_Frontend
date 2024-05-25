
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InlineDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="flex bg-orange-100 rounded-lg card justify-content-center w-[400px] h-[400px] items-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>

    )
}
        