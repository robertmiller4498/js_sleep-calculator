const getSleepHours = (day) => {
    switch(day) {
      case 'sunday':
        return 9;
        break;
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 5;
        break;
    default:
      return 'Error!'
    }
    };
    
    //Curious the reasoning behind brackets not allowing the getActualSleepHours to work in below function
    const getActualSleepHours = () => 
      getSleepHours('sunday')
      + getSleepHours('monday')
      + getSleepHours('tuesday')
      + getSleepHours('wednesday')
      + getSleepHours('thursday')
      + getSleepHours('friday')
      + getSleepHours('saturday');
    
    
    const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    };
    
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    
      if (actualSleepHours === idealSleepHours) {
        console.log('User is getting the perfect amount of sleep.');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('User got more sleep than needed. You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than neccesary.'); 
      } else if (actualSleepHours < idealSleepHours) {
        console.log('User did not recieve neccesary amount of sleep. You got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep than needed. Get some rest.');
      } else {
        return 'Error!';
      }
    };
    
    calculateSleepDebt();
    
    
    
    