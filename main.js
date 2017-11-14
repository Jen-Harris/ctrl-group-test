// Medication

var ctx = document.getElementById('medicationChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["13th Feb", "14th Feb", "15th Feb", "16th Feb", "17th Feb", "18th Feb", "19th Feb", "20th Feb", "21st Feb", "22nd Feb", "23rd Feb", "24th Feb", "26th Feb", "27th Feb", "28th Feb", "1st March", "2nd March", "3rd March", "4th March", "5th March", "6th March", "7th March", "8th March", "9th March", "10th March", "11th March", "12th March", "13th March", "14th March", "15th March", "16th March", "17th March", "18th March", "19th March", "20th March", "21st March", "22nd March", "23rd March", "24th March", "25th March", "26th March"],
        datasets: [{
            label: "Medication",
            showLine: false,
            pointStyle: 'circle',
            backgroundColor: 'rgb(166, 74, 185)',
            spanGaps: true,
            scaleShowLabels: false,
            pointRadius: 6,
            data: [1,1,,1,1,1,,1,,,1,,,1,1,,1,1,,,,1,1,1,,1,1,1,,1,1,1,1,,,,,1,1,,1]
        }]
    },
    options: {
       scales: {
         yAxes: [{
           display: false
         }],
       }
     },
});

// Wellbeing

var wellbeing = document.getElementById('wellbeingChart').getContext('2d');
var chart = new Chart(wellbeing, {
    type: 'line',
    data: {
        labels: ["13th Feb", "14th Feb", "15th Feb", "16th Feb", "17th Feb", "18th Feb", "19th Feb", "20th Feb", "21st Feb", "22nd Feb", "23rd Feb", "24th Feb", "26th Feb", "27th Feb", "28th Feb", "1st March", "2nd March", "3rd March", "4th March", "5th March", "6th March", "7th March", "8th March", "9th March", "10th March", "11th March", "12th March", "13th March", "14th March", "15th March", "16th March", "17th March", "18th March", "19th March", "20th March", "21st March", "22nd March", "23rd March", "24th March", "25th March", "26th March"],
        datasets: [{
          label: "Mood",
          fill: false,
          backgroundColor: 'rgb(74,74,74)',
          borderColor: 'rgb(74,74,74)',
          pointRadius: 2,
          data:
          [6,4,4,6,,,5,,5,4,4,3,3,,3,4,,,4,4,4,3,2,2,3,3,5,5,5,5,6,6,7,7,6,,,7,,,8,8 ]
        },
        {
            label: "Wellbeing",
            pointStyle: 'circle',
            backgroundColor: 'rgb(80, 227, 194)',
            borderColor: 'rgb(80, 227, 194)',
            spanGaps: true,
            scaleShowLabels: false,
            pointRadius: 1,
            steppedLine: true,
            data: [47,44,57,30,50,,55,39,,,45,30,46,29,46,40,29,,27,25,30,,30,28,30,32,,55,59,62,60,58,56,61,,60,58,56,60,63,60,63 ]
        },]
    },
});

// PHQ Chart

var phq = document.getElementById('phqChart').getContext('2d');
var chart = new Chart(phq, {
    type: 'line',
    data: {
        labels: ["2nd Feb", "1st March", "16th March"],
        datasets: [{
            label: "PHQ-9",
            fill: false,
            pointStyle: 'circle',
            backgroundColor: 'rgb(255, 236, 2)',
            borderColor: 'rgb(255, 236, 2)',
            spanGaps: true,
            scaleShowLabels: true,
            pointRadius: 12,
            data: [17, 19, 11],
        },
      {
        label: "PHQ-D-5",
        fill: false,
        pointStyle: 'circle',
        backgroundColor: 'rgb(252, 78, 196)',
        borderColor: 'rgb(252, 78, 196)',
        spanGaps: true,
        scaleShowLabels: true,
        pointRadius: 12,
        data: [9, 14, 6],

      }]
    },

});
