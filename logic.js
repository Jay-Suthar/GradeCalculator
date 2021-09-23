const cal = document.getElementById('btn');

cal.addEventListener('click',()=>{
    let toc = document.getElementById('toc').value;
    let os = document.getElementById('os').value;
    let oom = document.getElementById('oom').value;
    let pas = document.getElementById('pas').value;
    if(cal.style.color="rgb(0, 190, 190)")
    {
        cal.style.color='white';
    }
    
    let totalGrades = parseFloat(toc) + parseFloat(os) + parseFloat(oom) + parseFloat(pas);
    alert(totalGrades);
    let grade = "";
    let per = (totalGrades/400) * 100;
    alert(per);

    if(per<=100 && per>=80)
    grade='A';

    else if(per<=79 && per>=60)
    grade='B';

    else if(per<=59 && per>=40)
    grade='C';

    else 
    grade='F';

    document.getElementById('show-data').innerHTML = `Out of 400 you have got ${totalGrades} and percentage is ${per}% <br> Your grade is ${grade}.`
})