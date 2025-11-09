/* reduce method can be used to iterate over the array and build a new object where keys represent the grouping criteria and values are array of grouped objects. */

const students = [
  { Name: "jack", Class: 6, Section: "A" },
  { Name: "tom", Class: 6, Section: "A" },
  { Name: "harry", Class: 2, Section: "B" },
  { Name: "alex", Class: 2, Section: "B" },
  { Name: "joseph", Class: 2, Section: "B" },
];

const groupedBySection = students.reduce((result, student) => { 
      const key = student.Section;
      (result[key] = result[key] || []).push(student);
      return result;
}, {});

console.log(groupedBySection);

/*
{
  A: [
    { Name: 'jack', Class: 6, Section: 'A' },
    { Name: 'tom', Class: 6, Section: 'A' }
  ],
  B: [
    { Name: 'harry', Class: 2, Section: 'B' },
    { Name: 'alex', Class: 2, Section: 'B' },
    { Name: 'joseph', Class: 2, Section: 'B' }
  ]
}
*/