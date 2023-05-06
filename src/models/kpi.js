/**
 * Represents a score, which consists of a name, value, fill color, stroke color, and font size.
 *
 * @class
 */
export class Score {
  /**
   * Creates a new score.
   *
   * @constructor
   * @param {string} name - The name of the score.
   * @param {number} value - The value of the score.
   * @param {string} fill - The fill color of the score.
   * @param {string} stroke - The stroke color of the score.
   * @param {number} fontSize - The font size of the score.
   */
  constructor(name, value, fill, stroke, fontSize) {
    this.name = name;
    this.value = value;
    this.fill = fill;
    this.stroke = stroke;
    this.fontSize = fontSize;
  }
}

/**
 * Represents an activity, which consists of a day, kilograms, and calories.
 *
 * @class
 */
export class Activity {
  /**
   * Creates a new activity.
   *
   * @constructor
   * @param {string} day - The day of the activity.
   * @param {number} kilogram - The weight of the activity.
   * @param {number} calories - The number of calories burned during the activity.
   */
  constructor(day, kilogram, calories) {
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}

/**
 * Represents an average session, which consists of a day and session length.
 *
 * @class
 */
export class AverageSession {
  /**
   * Creates a new average session.
   *
   * @constructor
   * @param {number} day - The day of the session, represented as a number from 1 to 7 (1 = Monday, 7 = Sunday).
   * @param {number} sessionLength - The length of the session, in minutes.
   */
  constructor(day, sessionLength) {
    /**
     * The day of the session, represented as a number from 1 to 7 (1 = Monday, 7 = Sunday).
     *
     * @type {number}
     */
    this.day = day;

    /**
     * The length of the session, in minutes.
     *
     * @type {number}
     */
    this.sessionLength = sessionLength;

    /**
     * The day of the session, represented as a single letter abbreviation (M = Monday, T = Tuesday, etc.).
     *
     * @type {string}
     */
    const dayInLetters = ['offset', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
    this.dayToDisplay = dayInLetters[day];
  }
}

/**
 * Represents a performance, which consists of a kind and a value.
 *
 * @class
 */
export class Performance {
  /**
   * Creates a new performance.
   *
   * @constructor
   * @param {string} kind - The kind of performance.
   * @param {number} value - The value of the performance.
   * @param {Object} kinds - An object mapping kind names to display names.
   */
  constructor(kind, value, kinds) {
    /**
     * The kind of performance.
     *
     * @type {string}
     */
    this.kind = kind;

    /**
     * The value of the performance.
     *
     * @type {number}
     */
    this.value = value;

    /**
     * The display name of the kind of performance.
     *
     * @type {string}
     */
    this.kindToDisplay = kinds[kind];
  }
}