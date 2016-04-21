// var name="Ruthie P Floats";
// var role="Web Developer";
// var awesomethoughts="I am " +name +" and I am awesome.";
// var funThoughts=awesomethoughts.replace("awesome", "fun");
// console.log(funThoughts);
// $('#main').append(funThoughts);
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// // $("#header").append(formattedName).append(formattedRole);
// $("#header").prepend(formattedRole).prepend(formattedName);

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!

    for (i=0; i<_array.length-1; i++){
        newArray[i]=_array[i];
    }
    newArray[_array.length-1]=_array[_array.length-1]+1;


    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));