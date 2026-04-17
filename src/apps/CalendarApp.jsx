import { useState } from 'react';
import Window from '../components/Window';
import { calendarEvents } from '../data/gameData';
import useGameStore from '../store/gameStore';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

function getDateForEvent(ev) {
  const d = new Date();
  switch (ev.date) {
    case 'tomorrow': return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    case '3days_ago': return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 3);
    case '1week_ago': return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
    case 'last_month_15': return new Date(d.getFullYear(), d.getMonth() - 1, 15);
    case 'feb28': return new Date(d.getFullYear(), 1, 28);
    case 'last_wed': {
      const dd = new Date();
      dd.setDate(dd.getDate() - ((dd.getDay() + 4) % 7));
      return dd;
    }
    case '2weeks_ago': return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 14);
    case '3months_ago': return new Date(d.getFullYear(), d.getMonth() - 3, d.getDate());
    default: return d;
  }
}

export default function CalendarApp() {
  const [viewMonth, setViewMonth] = useState(month);
  const [viewYear, setViewYear] = useState(year);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const addClue = useGameStore((s) => s.addClue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const monthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

  const eventDates = calendarEvents.map((ev) => {
    const d = getDateForEvent(ev);
    return { ...ev, realDate: d, dayKey: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}` };
  });

  const handleEventClick = (ev) => {
    setSelectedEvent(ev);
    if (ev.clue && !hasSeen(ev.date)) {
      markSeen(ev.date);
      addClue(ev.clue);
    }
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <Window appId="calendar" title="日历" icon="📅">
      <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <button onClick={prevMonth} style={navBtnStyle}>◀</button>
          <span style={{ fontSize: 16, fontWeight: 600 }}>{viewYear}年 {monthNames[viewMonth]}</span>
          <button onClick={nextMonth} style={navBtnStyle}>▶</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, textAlign: 'center' }}>
          {['日','一','二','三','四','五','六'].map((d) => (
            <div key={d} style={{ fontSize: 11, opacity: 0.4, padding: 4 }}>{d}</div>
          ))}
          {cells.map((day, i) => {
            const key = `${viewYear}-${viewMonth}-${day}`;
            const evts = day ? eventDates.filter((e) => e.dayKey === key) : [];
            const isToday = day && viewMonth === month && viewYear === year && day === today.getDate();

            return (
              <div
                key={i}
                onClick={() => evts.length > 0 && handleEventClick(evts[0])}
                style={{
                  padding: '6px 2px',
                  minHeight: 50,
                  borderRadius: 6,
                  background: isToday ? 'rgba(0,122,255,0.2)' : evts.length > 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
                  cursor: evts.length > 0 ? 'pointer' : 'default',
                  border: isToday ? '1px solid var(--accent)' : '1px solid transparent',
                }}
              >
                {day && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: isToday ? 700 : 400 }}>{day}</div>
                    {evts.map((ev, j) => (
                      <div key={j} style={{
                        fontSize: 9,
                        background: ev.clue ? 'rgba(255,59,48,0.3)' : 'rgba(0,122,255,0.3)',
                        borderRadius: 3,
                        padding: '1px 3px',
                        marginTop: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {ev.label}
                      </div>
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {selectedEvent && (
          <div style={{
            marginTop: 16, padding: 16,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{selectedEvent.label}</div>
            <div style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.5 }}>{selectedEvent.note}</div>
            <button
              onClick={() => setSelectedEvent(null)}
              style={{ marginTop: 8, background: 'none', border: 'none', color: 'var(--accent)', fontSize: 12, cursor: 'pointer' }}
            >
              关闭
            </button>
          </div>
        )}
      </div>
    </Window>
  );
}

const navBtnStyle = {
  background: 'rgba(255,255,255,0.08)',
  border: 'none',
  borderRadius: 6,
  color: '#fff',
  padding: '4px 12px',
  cursor: 'pointer',
  fontSize: 12,
};
