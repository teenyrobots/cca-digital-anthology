// FUNCTIONS

// takes student object, returns jQuery object
function makeStudentCard(student) {
    let studentDiv = null;
    var name = student.displayName,
            slug = student.slug,
            thesisUrl = 'thesis.html?student=' + slug,
            digitalUrl = 'digital/' + student.digitalUrl,
            thesisTitle = student.thesisTitle,
            digitalTitle = student.digitalTitle,
            thesisPages = student.thesisPages;
    if (!digitalTitle) {
        studentDiv = $("<div class='studentCard'>" + "<h2>" + name + "</h2><span class='thesis'><a href='" + thesisUrl + "'><img src='images/cards/thesis/" + slug + ".png'><p>" + thesisTitle + "</p></a></span>");
    } else {
        studentDiv = $("<div class='studentCard'>" + "<h2>" + name + "</h2><span class='thesis'><a href='" + thesisUrl + "'><img src='images/cards/thesis/" + slug + ".png'><p>" + thesisTitle + "</p></a></span>"+ "</p><span class='digital'><a href='" + digitalUrl + "' target='_blank'><img src='images/cards/digital/" + slug + ".png'><p>" + digitalTitle + "</p></a></span></div>");
    }
    return studentDiv;
};

$.getJSON('data/students.json', function(data) {
    // Filter JSON file for students that have background images
    var backgroundStudents = data.students.filter(function(student){
        return student.backgroundImage !== undefined;
});

function setSplash(students) {
    var rando = Math.floor(Math.random() * students.length);
    var luckyStudent = students[rando];

    var backgroundImg = "images/backgrounds/" + luckyStudent.backgroundImage + ".jpg";
    $('body').css('background-image', 'url(' + backgroundImg + ')');

    $('#luckyStudent').append(luckyStudent.displayName);
    $('#luckyCartoon').append(luckyStudent.thesisTitle);
    $('#luckyThesis').attr('href', 'thesis.html?student=' + luckyStudent.slug);
}


// HERE IS WHERE THE DOCUMENT BECOMES READY

$(document).ready(function(){

    // Background splash (index, directory)
    if ($('body').hasClass("comicBG")) {
        setSplash(backgroundStudents);
    }
    // DIRECTORY
    if ($('body').hasClass('directory')) {
        // make student cards
        data.students.map(function(student) {
            var studentCard = makeStudentCard(student);
            var classCardId = "#cards" + student.year;
            $(classCardId).append(studentCard);
        });

    }





    });
})
