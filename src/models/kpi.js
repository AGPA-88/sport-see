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
  constructor(day, sessionLength){
      const dayInLetters = ['offset', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
      this.day = day;
      this.sessionLength = sessionLength;
      this.dayToDisplay = dayInLetters[day];
    }
  }

export class Performance {
    constructor(kind, value, kinds) {
      this.kind = kind;
      this.value = value;
      this.kindToDisplay = kinds[kind];
    }
  }