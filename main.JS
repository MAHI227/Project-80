var name_of_stundent_array =[];
function submit()
{
    var display_stundent_array =[];
    for(var j =1; j<=4; j++){
        var name_of_the_stundent = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_stundent);
        name_of_stundent_array.push(name_of_the_stundent);
 }
 console.log(name_of_stundent_array);

 var lenght_of_name_of_stundent_array = name_of_stundent_array.length;
 console.log(lenght_of_name_of_stundent_array);

 for(var k= 0; k< lenght_of_name_of_stundent_array; k++)
{
    display_stundent_array.push("<h4>NAME -"+ name_of_stundent_array[k]+ "</h4>");
    console.log(display_stundent_array);
}

console.log(display_stundent_array);
document.getElementById("display_name_with_commas").innerHTML=display_stundent_array;

var remove_commas = display_stundent_array.join( " " );
console.log(display_stundent_array);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function searching()
{
    name_of_stundent_array.search();
    console.log(name_of_stundent_array);

    var display_stundent_array_searching name_of_stundent_array =[];
    function submit()
    {
        var display_stundent_array =[];
        for(var j =1; j<=4; j++){
            var name_of_the_stundent = document.getElementById("name_of_the_student_"+j).value;
            console.log(name_of_the_stundent);
            name_of_stundent_array.push(name_of_the_stundent);
     }
     console.log(name_of_stundent_array);
    
     var lenght_of_name_of_stundent_array = name_of_stundent_array.length;
     console.log(lenght_of_name_of_stundent_array);
    
     for(var k= 0; k< lenght_of_name_of_stundent_array; k++)
    {
        display_stundent_array.push("<h4>NAME -"+ name_of_stundent_array[k]+ "</h4>");
        console.log(display_stundent_array);
    }
    
    console.log(display_stundent_array);
    document.getElementById("display_name_with_commas").innerHTML=display_stundent_array;
    
    var remove_commas = display_stundent_array.join( " " );
    console.log(display_stundent_array);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    }
    
    function searching()
    {
        name_of_stundent_array.search();
        console.log(name_of_stundent_array);
    
        var display_stundent_array_Searching =[];
    
        var lenght_of_name_of_stundent_array = name_of_stundent_array.length;
    console.log(lenght_of_name_of_stundent_array);
    
    for(var k=0; k<lenght_of_name_of_stundent_array; k++)
    {
        display_stundent_array_Searching.push("<h4>NAME-" + name_of_stundent_array[k]+ "</h4>");
        console.log(display_stundent_array_searching);
    }
    
    var remove_commas=display_stundent_array_searching.join(" ");
    console.log(remove_commas);
    
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    } =[];

    var lenght_of_name_of_stundent_array = name_of_stundent_array.length;
console.log(lenght_of_name_of_stundent_array);

for(var k=0; k<lenght_of_name_of_stundent_array; k++)
{
    display_stundent_array_searching.push("<h4>NAME-" + name_of_stundent_array[k]+ "</h4>");
    console.log(display_stundent_array_searching);
}

var remove_commas=display_stundent_array_searching.join(" ");
console.log(remove_commas);

document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}