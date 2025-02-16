import { v4 as uuid } from "uuid";
import type { CalendarItem } from "@/type";

type Week = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export const dateUtils = {
    WEEK: {
        Mon: 0,
        Tue: 1,
        Wed: 2,
        Thu: 3,
        Fri: 4,
        Sat: 5,
        Sun: 6
    },

    offset: (date?: string): number =>
    {
        let timestamp: number;
        let lastIndexOfSlash: number;
        if (date === undefined)
        {
            let today = new Date().toLocaleDateString();
            lastIndexOfSlash = today.lastIndexOf("/");
            today = today.substring(0, lastIndexOfSlash);
            timestamp = Date.parse(`${today}/1`);
        }
        else
        {
            lastIndexOfSlash = date.lastIndexOf("/");
            if (lastIndexOfSlash > 4)
            {
                date = date.substring(0, lastIndexOfSlash);
            }
            timestamp = Date.parse(`${date}/1`);
        }

        let week = new Date(timestamp).toString().split(" ")[0] as Week;
        return dateUtils.WEEK[week];
    },

    dayOfMonth: (date?: string) =>
    {
        if (date === undefined)
        {
            let timestamp = Date.now();
            date = new Date(timestamp).toLocaleDateString();
        }
        //console.log("dayOfMonth(date): ",date);
        let index = date.lastIndexOf("/");
        if (index > 4)
        {
            date = date.substring(0, index);
        }
        //console.log("dayOfMonth(date&index): ", date, index);
        let dateArr = date.split("/");
        let year = Number(dateArr[0]);
        let month = Number(dateArr[1]);

        //console.log("dayOfMonth(year&month): ", year, month);

        switch (month)
        {
            case 1:
                return 31;
            case 2:
            {
                if (year % 400 === 0)
                    return 29;
                else if (year % 4 === 0 && year % 100 !== 0)
                    return 29;
                else
                    return 28;
            }
            case 3:
                return 31;
            case 4:
                return 30;
            case 5:
                return 31;
            case 6:
                return 30;
            case 7:
                return 31;
            case 8:
                return 31;
            case 9:
                return 30;
            case 10:
                return 31;
            case 11:
                return 30;
            case 12:
                return 31;
            default:
                return 0;
        }
    },

    generateCalendar: (info: string, date?: string) =>
    {
        if (date?.includes(","))
            date = date.replace(",", "/");

        let offset = dateUtils.offset(date);
        let dayOfMonth = dateUtils.dayOfMonth(date);
        let length = offset + dayOfMonth;

        let signedInfo = info.split("");
        // console.log(signedInfo);
        // console.log(offset, dayOfMonth);

        let calendar = [];
        let count = 1;
        for (let i = 0; i < ((length <= 35) ? 35 : 42); i++)
        {
            let item: CalendarItem = {}
            if (i < offset || i > (length - 1))
                item.date = undefined;
            else
            {
                item.isSigned = Number(signedInfo[count - 1]) === 1;
                item.date = count++;
            }
            item.key = uuid();
            calendar.push(item);
        }

        return calendar;
    },

    getCurrentDate: () =>
    {
        let timestamp = Date.now();
        let date = new Date(timestamp).toLocaleDateString();
        let dateArr = date.split("/");
        if ((Number(dateArr[1]) < 10))
        {
            dateArr[1] = "0" + dateArr[1];
        }

        if ((Number(dateArr[2]) < 10))
        {
            dateArr[2] = "0" + dateArr[2];
        }
        return dateArr;
    },

    getPrevMonth: (date: string) =>
    {
        let [ year, month ] = date.split("-");

        let prevMonth: string;

        if (Number(month) == 1)
        {
            prevMonth = "12";
            year = `${Number(year) - 1}`;
        }
        else
        {
            let numMonth = Number(month) - 1;
            prevMonth = numMonth < 10 ? `0${numMonth}` : `${numMonth}`;
        }

        return [ year, prevMonth ];
    },

    getNextMonth: (date: string) =>
    {
        let [ year, month ] = date.split("-");

        let nextMonth: string;

        if (Number(month) == 12)
        {
            nextMonth = "01";
            year = `${Number(year) + 1}`
        }
        else
        {
            let numMonth = Number(month) + 1;
            nextMonth = numMonth < 10 ? `0${numMonth}` : `${numMonth}`;
        }

        return [ year, nextMonth ];
    }
}
