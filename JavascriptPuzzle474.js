/* const log = "2025-08-14 ERROR Something broke"; Extract the value  date, level and message from log */

const log = "2025-08-14 ERROR Something broke";

const { groups: { date, level, message }} = /(?<date>\d{4}-\d{2}-\d{2}) (?<level>[A-Z]+) (?<message>.*)/.exec(log);

console.log(date);  // 2025-08-14

console.log(level);  // ERROR

console.log(message); // Something broke