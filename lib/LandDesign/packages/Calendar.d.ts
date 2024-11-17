import { default as React } from 'react';
export type CalendarProps = {
    /** 语言 */
    language?: "zh" | "en";
    /** 最小年份 */
    minYear?: number;
    /** 最大年份 */
    maxYear?: number;
    /** 选择天数 */
    onDayChange?: (day: number, month: number, year: number) => void;
};
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
