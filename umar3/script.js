const countryCodes = [
    {
      Country: 'Kg',
      Code: '+996'
    },
    {
      Country: 'UZ',
      Code: '+998'
    },
    {
      Country: 'RU',
      Code: '+7'
    },
    {
      Country: 'UA',
      Code: '+380'
    },
  ];
  
  function findCountry() {
    const inputElement = document.getElementById('phoneNumber').value;
    const countryOutputElement = document.getElementById('countryOutput');
    // const inputText = inputElement.value;
  
    const space = inputElement.indexOf(' ');
    if (space !== -1) {
      const countryCode = inputElement.substring(0, space);
      
      const country = countryCodes.find(country => country.Code === countryCode);
      
      if (country) {
        countryOutputElement.textContent = country.Country;
      } else {
        countryOutputElement.textContent = 'Страна не найдена';
      }
    } else {
      countryOutputElement.textContent = 'Пожалуйста, введите код страны после пробела';
    }
  }
