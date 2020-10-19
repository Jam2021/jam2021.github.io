// JavaScript Document
function tellFortune(numKids, partner, location, jobTitle) {
    let future = "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
    return(future)
    
}
   
tellFortune(3, 'Joe', 'Mexico', "Electrician");
tellFortune(4, 'Ramon', 'Uganda', "Plumber");
tellFortune(0, 'Julissa', 'El Salvador', "Artist");
document.getElementById("fortune1").innerHTML = tellFortune(3, 'Joe', 'Mexico', "Electrician");
document.getElementById("fortune2").innerHTML = tellFortune(4, 'Ramon', 'Uganda', "Plumber");
document.getElementById("fortune3").innerHTML = tellFortune(0, 'Julissa', 'El Salvador', "Artist");


