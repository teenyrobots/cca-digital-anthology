const makeStudentCardDivString = function(name, slug, year, thesisUrl, digitalUrl, thesisTitle, digitalTitle, thesisPages, website) {
    let studentCardDiv;
    let nameField = '';
    let thesisField = '';
    let digitalField = '';
    let webField = '';
    
    if (name) {
        nameField = `<h2>${name}</h2>`;
    }
    
    if (thesisTitle) {
        thesisField = `<span class='thesis'><a href='${thesisUrl}'><img src='images/cards/thesis/${slug}.png'><p>${thesisTitle}</p></a></span>`;
    }
    
    if (digitalTitle) {
        digitalField = `<span class='digital'><a href='${digitalUrl}' target='_blank'><img src='images/cards/digital/${slug}.png'><p>${digitalTitle}</p></a></span>`;
    }
    
    if (website) {
        webField = `<a href='${website}' target='_blank'>See more work by ${name}</a>`;
    }
    
    studentCardDiv = `<div class='studentCard'>${nameField}${thesisField}${digitalField}${webField}</div>`;
    
    return studentCardDiv;
}
