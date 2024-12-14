import { format, isToday, isThisWeek, isThisMonth } from 'date-fns';

export const formatDateTime = (date: string) => format(new Date(date), 'PPp');

export const formatShortDay = (date: Date) => format(date, 'EEE');
export const formatDayNumber = (date: Date) => format(date, 'd');
export const formatDateKey = (date: Date) => format(date, 'yyyy-MM-dd');

export const isDateToday = (date: Date | string) => isToday(new Date(date));
export const isDateThisWeek = (date: Date | string) => isThisWeek(new Date(date));
export const isDateThisMonth = (date: Date | string) => isThisMonth(new Date(date));