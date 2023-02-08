import { useRef } from "react";

function convertDaysToYearsMonths(days: any) {
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30);
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
}

function jobexperience() {
    return convertDaysToYearsMonths(Math.round(new Date().getTime() - new Date("2016-01-04").getTime()) / (1000 * 60 * 60 * 24))
}

function scrollToElement(elementClass: string, offset: number): void {
    // const targetElement = useRef(null);
    setTimeout(() => {
        const targetElement = document.querySelector(elementClass);
        if (targetElement) {
            const elementRect = targetElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            window.scrollTo({
              top: absoluteElementTop - offset,
              behavior: 'smooth'
            });
        } else {
            console.log('Not scroll');
        }
    }, 200);
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
  
// function scollToSticky(element:any){
//     window.addEventListener("scroll",function(){
//         const header = this.document.querySelector(element)
//         header.classList.toggle("sticky", window.scrollY > 0)
//     })
// }

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});


function Entry(props: any) {
    return (  
        <div className="timeline-item">
            <div className="timeline-date">{new Date(props.end_Date).getFullYear()}</div>
            {/* <div className="timeline-date">{new Date(props.end_Date).toLocaleString('en-us',{year:'numeric', month:'short'})}</div> */}
            <div className="timeline-content">
                <h3 className="timeline-data">{"Company : " + props.company} </h3>
                <p className="timeline-data">{"Start Date : " + props.start_Date.toLocaleDateString()} - {"End Date : " + props.end_Date.toLocaleDateString()}</p>
                <p className="timeline-data">{convertDaysToYearsMonths(Math.round(props.end_Date.getTime() - props.start_Date.getTime()) / (1000 * 60 * 60 * 24))}</p>
                <p className="timeline-data">{"Position : " + props.position}</p>
            </div>
        </div>
    );  
}

function createEntry(dataterm: any) {
    // dataterm.end_Date === dataterm.end_Date.slice(-1)
    //   ? "Now"
    //   : dataterm.end_Date
    return (  
        <Entry 
            key={dataterm.index}
            company={dataterm.company}
            start_Date={dataterm.start_Date}
            end_Date={dataterm.end_Date}
            position={dataterm.position}
        />
    );
}

// -----------------------play animation when scroll down----------------------- //
// change class name dynamic
// function observeElementsByClass(className) {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show')
//         } else {
//           entry.target.classList.remove('show')
//         }
//       })
//     })
  
//     const hiddenElements = document.querySelectorAll(`.${className}`)
//     hiddenElements.forEach((el) => observer.observe(el))
// }
// observeElementsByClass(chartbar)

// ---------------------------------------------------------
const className = 'header';
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    })
}, { threshold: [0.2] })

const hiddenElements = document.querySelectorAll(`.${className}`)
hiddenElements.forEach((el) => observer.observe(el))


// -----------------------play animation when scroll down----------------------- //

export default Entry;
export {createEntry, convertDaysToYearsMonths, jobexperience, scrollToElement, scrollToTop};