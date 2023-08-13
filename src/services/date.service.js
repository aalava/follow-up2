// OOP

class Date{

  constructor(year, month, day){
    this._year = this.validateYear(year);
    this._month = this.validateMonth(month);
    this._day = this.validateDay(day);
  }

  ToString(){
    return `${this._year}/${this._month}/${this._day}`
  }

  validateYear(year){
    if (year < 0){
      throw new Error("this year is not valid");
    }
    return year;
  }
  validateMonth(month){
    if(month < 1 || month > 12){
      throw new Error("this month is not valid");
    }
    return month;
  }
  validateDay(day){
    if(day == 29 && this._month == 2 && this.isLeapYear(this._year)){
      return day;
    }

    //Validos los otrso meses

    

    throw new Error("this day is not valid");
    //Validos los otrso meses
  }

  isLeapYear(year){

    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;

    // if(year % 4 == 0){
    //   if(year % 100 == 0){
    //     if(year % 400 == 0){
    //       return true;
    //     }else{
    //       return false;
    //     }
    //   }else{
    //     return true;
    //   }
    // }else{
    //   return false;
    // }
  }


}

module.exports = Date;


