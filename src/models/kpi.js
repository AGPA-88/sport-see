export class Score{
    constructor(name, value, fill, stroke,fontSize){
      this.name=name;
      this.value=value;
      this.fill=fill;
      this.stroke=stroke;
      this.fontSize=fontSize;
    }
  }

export class Activity{
    constructor(day,kilogram,calories){
        this.day=day;
        this.kilogram = kilogram;
        this.calories = calories;
    }
}

export class AverageSession{
    constructor(dayToDisplay, sessionLength){
      this.dayToDisplay = dayToDisplay;
      this.sessionLength = sessionLength;
    }
  }

export class Performance {
    constructor(kindToDisplay, value) {
      this.kindToDisplay = kindToDisplay;
      this.value = value;
    }
  }