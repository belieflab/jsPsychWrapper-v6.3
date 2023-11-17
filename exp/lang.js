// Translate consent button
function translate() {
    let consent;
    let load;
    switch (language) {
  
      case 'english':
        consent = 'CONSENT';
        load = 'LOAD';
        break
  
      case 'french':
        consent = 'CONSENTEMENT';
        load = 'CHARGE';
        break
  
      case 'german':
        consent = 'ZUSTIMMUNG';
        load = 'BELASTUNG';
        break
  
    }
  
    document.getElementById('submitButton').innerHTML = consent;
    document.getElementById('nextButton').innerHTML = load;
}

translate();

switch (language) {
    case 'english':
        break;
    case 'french':
        break;
    case 'german':
        break;
}