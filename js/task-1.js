console.log('js-hw03.task 1 : Slug generator');
//slug — to czytelny i unikalny identyfikator używany do tworzenia czytelnych adresów URL. Slug jest zawsze ciągiem małych liter, z wyrazami oddzielonymi myślnikami.

function slugify(title) {
    title = title.toLowerCase().replaceAll(" ", "-");
    return title;
} 
    
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
