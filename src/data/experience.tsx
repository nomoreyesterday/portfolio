const today = new Date();
const date_time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

interface ExperienceProps {
    index?: number;
    company: string;
    start_Date: Date;
    end_Date: Date;
    position: string;
    jobEXP?: any;
}

const experience: ExperienceProps[] = [
    {
        index: 1,
        company: "Future Telecom. Co., Ltd",
        start_Date: new Date("2021-11-16"),
        end_Date: new Date(date_time), //today
        position: "Planning",
        // JobEXP: convertDaysToYearsMonths(Math.round((End_Date.getTime() - Start_Date.getTime()) / (1000 * 60 * 60 * 24)))
        },
    {
        index: 2,
        company: "Metro Global Services Limited",
        start_Date: new Date("2019-04-01"),
        end_Date: new Date("2021-11-15"),
        position: "Planning",
        // JobEXP: Math.round((End_Date.getDate() - Start_Date.getDate()))
    },
    {
        index: 3,
        company: "Air Connect Engineering",
        start_Date: new Date("2018-10-01"),
        end_Date: new Date("2019-03-31"),
        position: "Planning",
        // JobEXP: Math.round((End_Date.getDate() - Start_Date.getDate()))
    },
    {
        index: 4,
        company: "Turnkey Communication Services",
        start_Date: new Date("2016-12-19"),
        end_Date: new Date("2017-08-31"),
        position: "OMC",
        // JobEXP: Math.round((End_Date.getDate() - Start_Date.getDate()))
    },
    {
        index: 5,
        company: "Huawei",
        start_Date: new Date("2016-01-04"),
        end_Date: new Date("2016-12-16"),
        position: "OMC",
        // JobEXP: Math.round((End_Date.getDate() - Start_Date.getDate()))
    },
];

export default experience




