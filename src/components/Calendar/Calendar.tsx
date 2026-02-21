import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// Updated import path to your types folder
import { Meeting } from '../../types'; 

interface CalendarProps {
  events: Meeting[];
  onSelectSlot: (info: any) => void;
}

const MeetingCalendar: React.FC<CalendarProps> = ({ events, onSelectSlot }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-100 animate-fade-in">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        selectable={true}
        select={onSelectSlot}
        events={events.map(event => ({
          ...event,
          // Using your custom success and primary colors from tailwind config
          backgroundColor: event.status === 'confirmed' ? '#3B82F6' : '#F59E0B',
          borderColor: 'transparent'
        }))}
        height="70vh"
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
      />
    </div>
  );
};

export default MeetingCalendar;