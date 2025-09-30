import React from 'react';
import { faArrowDown, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from './DatePicker';


interface SolarFlareTimeFrameProps {
    startDate: Date;
    setStartDate: React.Dispatch<React.SetStateAction<Date>>;
    endDate: Date;
    setEndDate: React.Dispatch<React.SetStateAction<Date>>;
    filteredFlares: SolarFlare[];
}


const SolarFlareTimeFrame: React.FC<SolarFlareTimeFrameProps> = ({
    startDate,
    endDate,
    filteredFlares,
    setStartDate,
    setEndDate
}) => {
    

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl p-4 border-2 gap-2 glass-card border-cyan-400 w-full">
          <header>
            <h1 className="flex items-center gap-2 text-secondary text-cyan-400">
              <FontAwesomeIcon icon={faCalendar}/>
              {"Time Travel Through Space Events!"}
            </h1>
          </header>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-lg font-medium text-gray-400">Start Date</span>
                <DatePicker value={startDate} onChange={setStartDate} />
              </div>
              <div className="hidden sm:block pt-10">
                  <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="block sm:!hidden">
                  <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-lg font-medium text-gray-400">{"End Date"}</span>
                <DatePicker value={endDate} onChange={setEndDate} />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                {"Found "}
                <span className="font-bold text-primary">{filteredFlares.length}</span>
                {" solar flare"}
                {filteredFlares.length !== 1 ? "s" : ""}
                {" in this time period! 🚀"}
              </p>
            </div>
          </div>
        </div>
    );
};


export default SolarFlareTimeFrame;