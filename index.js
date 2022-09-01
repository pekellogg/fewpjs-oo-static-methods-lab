class Formatter {
  static capitalize(string) {
    return string !== string.toUpperCase ?
      string[0].toUpperCase() + string.slice(1) :
      string
  }

  static sanitize(string) {
    // removes non alpha-numeric chars except dash, single quotes
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(string) {
    const exceptionsArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let words = string.split(" ");
    let result = words.map(word => {
      if (word === words[0]) {
        return Formatter.capitalize(word);
      }
      else {
        if (!exceptionsArray.includes(word)) {
          return Formatter.capitalize(word);
        }
        else {
          return word
        }
      }
    })
    return result.join(" ");
  }
}

// capitalizes all words in a sentence except
// the
// a
// an
// but
// of
// and
// for
// at
// by
// from

// always capitalizes the first word

// "getting giggles" => "Getting Giggles"
// "where the wild things are" => "Where the Wild Things Are"
// "chicken soup with rice and a few other songs" => "Chicken Soup With Rice and a Few Other Songs"
// "Maurice a an but of and for at by from end" => "Maurice a an but of and for at by from End"
// "a tale of two cities" => "A Tale of Two Cities"
// "in the night kitchen" => "In the Night Kitchen"
