const today = new Date();

console.log("console : " + today.toLocaleDateString());

const date_time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// console.log(date_time)

const Start_Date = new Date("2021-11-16")
const End_Date = new Date(date_time) //today
const JobEXP = Math.round((End_Date.getTime() - Start_Date.getTime()) / (1000 * 60 * 60 * 24)) 

function convertDaysToYearsMonths(days) {
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30);
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
}


console.log("date_time : " + date_time)

console.log("Start_Date : " + Start_Date)
console.log("End_Date : " + End_Date)
console.log("JobEXP : " + convertDaysToYearsMonths(JobEXP))



const data = [
    {
      name: 'HTML',
      value: 80,
      grade: 'Good'
    },
    {
      name: 'CSS',
      value: 80,
      grade: 'Good'
    },
    {
      name: 'Javascript',
      value: 60,
      grade: 'Moderate'
    },
    {
      name: 'ReactJS',
      value: 70,
      grade: 'Good'
    },
    {
      name: 'NodeJS',
      value: 60,
      grade: 'Moderate'
    },
    {
      name: 'SQL',
      value: 60,
      grade: 'Moderate'
    },
    {
      name: 'MongoDB',
      value: 60,
      grade: 'Moderate'
    },
    {
      name: 'Python',
      value: 70,
      grade: 'Good'
    },
    {
      name: 'Excel Macro',
      value: 80,
      grade: 'Good'
    },
    {
      name: 'Adobe Photoshop',
      value: 80,
      grade: 'Good'
    },
    {
      name: 'Adobe Illustrator',
      value: 70,
      grade: 'Moderate'
    },
    {
      name: 'Adobe Premier',
      value: 80,
      grade: 'Good'
    },
  ];
  
  function gradeData(dataArray) {
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].value >= 80) {
          dataArray[i].grade = 'A';
        } else if (dataArray[i].value >= 70) {
          dataArray[i].grade = 'B';
        } else if (dataArray[i].value >= 60) {
          dataArray[i].grade = 'C';
        } else {
          dataArray[i].grade = 'D';
        }
      }
      return dataArray;
    }

const updatedData = gradeData(data);
  
console.log("gradedata : " + updatedData[0].value)
console.table(updatedData);