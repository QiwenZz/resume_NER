//
//
// function timeline(){
//     Highcharts.setOptions({
//         chart: {
//             style: {
//                 fontFamily: 'Courier, monospace',
//                 // color: '#f8cfca'
//             }
//         }
//     });
//     Highcharts.chart('story', {
//         chart: {
//             zoomType: 'x',
//             type: 'timeline',
//         },
//         xAxis: {
//             type: 'datetime',
//             visible: false
//         },
//         yAxis: {
//             gridLineWidth: 1,
//             title: null,
//             labels: {
//                 enabled: false
//             }
//         },
//         legend: {
//             enabled: false
//         },
//         title: {
//             text: 'The Story of Airbnb',
//             style:{
//                 font: '30px Courier, monospace',
//                 color: 'rgb(104, 102, 102)'
//             }
//         },
//         subtitle: {
//             text: 'Source: https://news.airbnb.com/about-us/',
//             style:{
//                 color: 'rgb(104, 102, 102)'
//             }
//         }
//         ,
//         tooltip: {
//             style: {
//                 width: 300,
//             },
//         },
//         series: [{
//             dataLabels: {
//                 allowOverlap: false,
//                 format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
//                     '{point.x:%d %b %Y}</span><br/>{point.label}'
//             },
//             marker: {
//                 symbol: 'circle'
//             },
//             data: [{
//                 x: Date.UTC(2007),
//                 name: 'FALL 2007',
//                 label: "Brian and Joe host Airbed & Breakfast's first guests."
//             }, {
//                 x: Date.UTC(2009),
//                 name: 'MARCH 2009',
//                 label: "Airbed & Breakfast officially changes its name to Airbnb and expands beyond rooms to offer apartments, whole homes and vacation rentals."
//             }, {
//                 x: Date.UTC(2011),
//                 name: 'SUMMER 2011',
//                 label: "Airbnb begins our international expansion with opening of our German office."
//             }, {
//                 x: Date.UTC(2014),
//                 name: 'JULY 2014',
//                 label: "Airbnb introduces the Belo."
//             }, {
//                 x: Date.UTC(2015),
//                 name: 'March and April 2015',
//                 label: "Airbnb becomes the official alternative accommodations provider for 2016 Rio Games. Airbnb launches in Cuba."
//             }, {
//                 x: Date.UTC(2016,11),
//                 name: 'NOVEMBER 2016',
//                 label: "Airbnb launches Experiences."
//             }, {
//                 x: Date.UTC(2020, 3),
//                 name: 'MARCH 2020',
//                 label: "Airbnb launches Frontline Stays to safely house medical workers and other first responders during the COVID-19 pandemic."
//             }, {
//                 x: Date.UTC(2020, 6),
//                 name: 'JUNE 2020',
//                 label: "Airbnb launches our Enhanced Cleaning Protocol to help hosts and guests book with confidence."
//             }]
//         }]
//     });
// }
//
// function pyramid(){
//     Highcharts.chart('pyramid', {
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: 'Top 5 countries have seen the greatest economic impact from Airbnb',
//             style:{
//                 font: '25px Courier, monospace',
//                 color: 'rgb(104, 102, 102)'
//             }
//         },
//         subtitle: {
//             text: 'Source: https://www.stratosjets.com/blog/airbnb-statistics/',
//             style:{
//                 color: 'rgb(104, 102, 102)'
//             }
//         }
//         ,
//         colors: ['#fd472f', '#fc7260', '#f89284', '#f5b5ad', '#f5d7d4'],
//         xAxis: {
//             crosshair: true,
//             labels: {
//                 style: {
//                     fontSize: '14px'
//                 }
//             },
//             type: 'category'
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'billion (dollar)'
//             }
//         },
//         tooltip: {
//             valueSuffix: ' billion dollars'
//         },
//         series: [{
//             name: 'Economic impact',
//             colorByPoint: true,
//             data: [
//                 ['United States', 33.8],
//                 ['France', 10.8],
//                 ['Spain', 6.9],
//                 ['Italy', 6.4],
//                 ['United Kingdom', 5.6]
//             ],
//             showInLegend: false
//         }]
//     });
// }
//
//
// function line(){
//
//     Highcharts.chart('line', {
//         chart: {
//             type: "area"
//             // styledMode: true
//         },
//         title: {
//             text: '2020 Gross booking value of Airbnb',
//             style:{
//                 font: '25px Courier, monospace',
//                 color: 'rgb(104, 102, 102)'
//             }
//         },
//         subtitle: {
//             text: 'Source: https://www.statista.com/chart/23717/monthly-gross-bookings-on-airbnb/'
//         },
//         xAxis: {
//             categories: ["Jan", "Fen", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Nov", "Dec"],
//             allowDecimals: false,
//             labels: {
//                 formatter: function () {
//                     return this.value;
//                 }
//             }
//         },
//         yAxis: {
//             title: {
//                 text: 'Gross booking percentages'
//             },
//             labels: {
//                 formatter: function () {
//                     return this.value +'%';
//                 }
//             },
//             tickInterval: 50,
//             max: 150,
//             plotLines: [{
//                 value: 0,
//                 color: 'grey',
//                 // dashStyle: 'shortdash',
//                 width: 2,
//                 label: {
//                     text: '0%'
//                 }
//             }]
//         },
//         tooltip: {
//             pointFormat: '<b>{point.y}%</b><br/>'
//         },
//         plotOptions: {
//             series: {
//                 className: 'main-color',
//                 negativeColor: true
//             },
//             area: {
//                 marker: {
//                     enabled: false,
//                     symbol: 'circle',
//                     radius: 2,
//                     states: {
//                         hover: {
//                             enabled: true
//                         }
//                     }
//                 }
//             }
//         },
//         series: [{
//             name: 'Month',
//             data: [
//                 24, 15, -127, -119, -69, -17, -19, -14, -17
//             ],
//             color: 'rgb(122, 192, 169);'
//         }]
//     });
// }
//
// function map(){
//     Highcharts.chart('map', {
//         chart: {
//             type: 'tilemap',
//             inverted: true,
//             height: '500',
//             width: '700'
//         },
//
//         accessibility: {
//             screenReaderSection: {
//                 beforeChartFormat:
//                     '<h5>{chartTitle}</h5>' +
//                     '<div>{chartSubtitle}</div>' +
//                     '<div>{chartLongdesc}</div>' +
//                     '<div>{viewTableButton}</div>'
//             },
//             point: {
//                 valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
//             }
//         },
//
//         title: {
//             text: 'Average Airbnb Prices of State',
//             style:{
//                 font: '25px Courier, monospace',
//                 color: 'rgb(104, 102, 102)'
//             }
//         },
//         subtitle:{
//             text: "Source: https://www.alltherooms.com/analytics/average-airbnb-prices-by-city/"
//         },
//         xAxis: {
//             visible: false
//         },
//
//         yAxis: {
//             visible: false
//         },
//
//         colorAxis: {
//             dataClasses: [{
//                 from: 0,
//                 to: 100,
//                 color: '#f5ebe9',
//                 name: '< 100$'
//             }, {
//                 from: 100,
//                 to: 150,
//                 color: '#fac9c3',
//                 name: '100$ - 150$'
//             }, {
//                 from: 150,
//                 to: 200,
//                 color: '#fc8f83',
//                 name: '150$ - 200$'
//             }, {
//                 from: 200,
//                 color: '#f06250',
//                 name: '> 200$'
//             }]
//         },
//
//         tooltip: {
//             headerFormat: '',
//             pointFormat: 'The average Airbnb prices of <b> {point.name}</b> is <b>{point.value}$</b> per night'
//         },
//
//         plotOptions: {
//             series: {
//                 dataLabels: {
//                     enabled: true,
//                     format: '{point.hc-a2}',
//                     color: '#000000',
//                     style: {
//                         textOutline: false
//                     }
//                 }
//             }
//         },
//
//         series: [{
//             name: '',
//             data: [{
//                 'hc-a2': 'AL',
//                 name: 'Alabama',
//                 region: 'South',
//                 x: 6,
//                 y: 7,
//                 value: 170
//             }, {
//                 'hc-a2': 'AK',
//                 name: 'Alaska',
//                 region: 'West',
//                 x: 0,
//                 y: 0,
//                 value: 132
//             }, {
//                 'hc-a2': 'AZ',
//                 name: 'Arizona',
//                 region: 'West',
//                 x: 5,
//                 y: 3,
//                 value: 148
//             }, {
//                 'hc-a2': 'AR',
//                 name: 'Arkansas',
//                 region: 'South',
//                 x: 5,
//                 y: 6,
//                 value: 137
//             }, {
//                 'hc-a2': 'CA',
//                 name: 'California',
//                 region: 'West',
//                 x: 5,
//                 y: 2,
//                 value: 189
//             }, {
//                 'hc-a2': 'CO',
//                 name: 'Colorado',
//                 region: 'West',
//                 x: 4,
//                 y: 3,
//                 value: 194
//             }, {
//                 'hc-a2': 'CT',
//                 name: 'Connecticut',
//                 region: 'Northeast',
//                 x: 3,
//                 y: 11,
//                 value: 139
//             }, {
//                 'hc-a2': 'DE',
//                 name: 'Delaware',
//                 region: 'South',
//                 x: 4,
//                 y: 9,
//                 value: 197
//             }, {
//                 'hc-a2': 'DC',
//                 name: 'District of Columbia',
//                 region: 'South',
//                 x: 4,
//                 y: 10,
//                 value: 180
//             }, {
//                 'hc-a2': 'FL',
//                 name: 'Florida',
//                 region: 'South',
//                 x: 8,
//                 y: 8,
//                 value: 162
//             }, {
//                 'hc-a2': 'GA',
//                 name: 'Georgia',
//                 region: 'South',
//                 x: 7,
//                 y: 8,
//                 value: 146
//             }, {
//                 'hc-a2': 'HI',
//                 name: 'Hawaii',
//                 region: 'West',
//                 x: 8,
//                 y: 0,
//                 value: 211
//             }, {
//                 'hc-a2': 'ID',
//                 name: 'Idaho',
//                 region: 'West',
//                 x: 3,
//                 y: 2,
//                 value: 146
//             }, {
//                 'hc-a2': 'IL',
//                 name: 'Illinois',
//                 region: 'Midwest',
//                 x: 3,
//                 y: 6,
//                 value: 129
//             }, {
//                 'hc-a2': 'IN',
//                 name: 'Indiana',
//                 region: 'Midwest',
//                 x: 3,
//                 y: 7,
//                 value: 134
//             }, {
//                 'hc-a2': 'IA',
//                 name: 'Iowa',
//                 region: 'Midwest',
//                 x: 3,
//                 y: 5,
//                 value: 106
//             }, {
//                 'hc-a2': 'KS',
//                 name: 'Kansas',
//                 region: 'Midwest',
//                 x: 5,
//                 y: 5,
//                 value: 89
//             }, {
//                 'hc-a2': 'KY',
//                 name: 'Kentucky',
//                 region: 'South',
//                 x: 4,
//                 y: 6,
//                 value: 134
//             }, {
//                 'hc-a2': 'LA',
//                 name: 'Louisiana',
//                 region: 'South',
//                 x: 6,
//                 y: 5,
//                 value: 168
//             }, {
//                 'hc-a2': 'ME',
//                 name: 'Maine',
//                 region: 'Northeast',
//                 x: 0,
//                 y: 11,
//                 value: 182
//             }, {
//                 'hc-a2': 'MD',
//                 name: 'Maryland',
//                 region: 'South',
//                 x: 4,
//                 y: 8,
//                 value: 130
//             }, {
//                 'hc-a2': 'MA',
//                 name: 'Massachusetts',
//                 region: 'Northeast',
//                 x: 2,
//                 y: 10,
//                 value: 173
//             }, {
//                 'hc-a2': 'MI',
//                 name: 'Michigan',
//                 region: 'Midwest',
//                 x: 2,
//                 y: 7,
//                 value: 167
//             }, {
//                 'hc-a2': 'MN',
//                 name: 'Minnesota',
//                 region: 'Midwest',
//                 x: 2,
//                 y: 4,
//                 value: 128
//             }, {
//                 'hc-a2': 'MS',
//                 name: 'Mississippi',
//                 region: 'South',
//                 x: 6,
//                 y: 6,
//                 value: 142
//             }, {
//                 'hc-a2': 'MO',
//                 name: 'Missouri',
//                 region: 'Midwest',
//                 x: 4,
//                 y: 5,
//                 value: 127
//             }, {
//                 'hc-a2': 'MT',
//                 name: 'Montana',
//                 region: 'West',
//                 x: 2,
//                 y: 2,
//                 value: 167
//             }, {
//                 'hc-a2': 'NE',
//                 name: 'Nebraska',
//                 region: 'Midwest',
//                 x: 4,
//                 y: 4,
//                 value: 103
//             }, {
//                 'hc-a2': 'NV',
//                 name: 'Nevada',
//                 region: 'West',
//                 x: 4,
//                 y: 2,
//                 value: 175
//             }, {
//                 'hc-a2': 'NH',
//                 name: 'New Hampshire',
//                 region: 'Northeast',
//                 x: 1,
//                 y: 11,
//                 value: 185
//             }, {
//                 'hc-a2': 'NJ',
//                 name: 'New Jersey',
//                 region: 'Northeast',
//                 x: 3,
//                 y: 10,
//                 value: 149
//             }, {
//                 'hc-a2': 'NM',
//                 name: 'New Mexico',
//                 region: 'West',
//                 x: 6,
//                 y: 3,
//                 value: 139
//             }, {
//                 'hc-a2': 'NY',
//                 name: 'New York',
//                 region: 'Northeast',
//                 x: 2,
//                 y: 9,
//                 value: 167
//             }, {
//                 'hc-a2': 'NC',
//                 name: 'North Carolina',
//                 region: 'South',
//                 x: 5,
//                 y: 9,
//                 value: 142
//             }, {
//                 'hc-a2': 'ND',
//                 name: 'North Dakota',
//                 region: 'Midwest',
//                 x: 2,
//                 y: 3,
//                 value: 85
//             }, {
//                 'hc-a2': 'OH',
//                 name: 'Ohio',
//                 region: 'Midwest',
//                 x: 3,
//                 y: 8,
//                 value: 113
//             }, {
//                 'hc-a2': 'OK',
//                 name: 'Oklahoma',
//                 region: 'South',
//                 x: 6,
//                 y: 4,
//                 value: 130
//             }, {
//                 'hc-a2': 'OR',
//                 name: 'Oregon',
//                 region: 'West',
//                 x: 4,
//                 y: 1,
//                 value: 147
//             }, {
//                 'hc-a2': 'PA',
//                 name: 'Pennsylvania',
//                 region: 'Northeast',
//                 x: 3,
//                 y: 9,
//                 value: 145
//             }, {
//                 'hc-a2': 'RI',
//                 name: 'Rhode Island',
//                 region: 'Northeast',
//                 x: 2,
//                 y: 11,
//                 value: 201
//             }, {
//                 'hc-a2': 'SC',
//                 name: 'South Carolina',
//                 region: 'South',
//                 x: 6,
//                 y: 8,
//                 value: 179
//             }, {
//                 'hc-a2': 'SD',
//                 name: 'South Dakota',
//                 region: 'Midwest',
//                 x: 3,
//                 y: 4,
//                 value: 158
//             }, {
//                 'hc-a2': 'TN',
//                 name: 'Tennessee',
//                 region: 'South',
//                 x: 5,
//                 y: 7,
//                 value: 187
//             }, {
//                 'hc-a2': 'TX',
//                 name: 'Texas',
//                 region: 'South',
//                 x: 7,
//                 y: 4,
//                 value: 151
//             }, {
//                 'hc-a2': 'UT',
//                 name: 'Utah',
//                 region: 'West',
//                 x: 5,
//                 y: 4,
//                 value: 165
//             }, {
//                 'hc-a2': 'VT',
//                 name: 'Vermont',
//                 region: 'Northeast',
//                 x: 1,
//                 y: 10,
//                 value: 208
//             }, {
//                 'hc-a2': 'VA',
//                 name: 'Virginia',
//                 region: 'South',
//                 x: 5,
//                 y: 8,
//                 value: 140
//             }, {
//                 'hc-a2': 'WA',
//                 name: 'Washington',
//                 region: 'West',
//                 x: 2,
//                 y: 1,
//                 value: 142
//             }, {
//                 'hc-a2': 'WV',
//                 name: 'West Virginia',
//                 region: 'South',
//                 x: 4,
//                 y: 7,
//                 value: 153
//             }, {
//                 'hc-a2': 'WI',
//                 name: 'Wisconsin',
//                 region: 'Midwest',
//                 x: 2,
//                 y: 5,
//                 value: 162
//             }, {
//                 'hc-a2': 'WY',
//                 name: 'Wyoming',
//                 region: 'West',
//                 x: 3,
//                 y: 3,
//                 value: 192
//             }]
//         }]
//     });
//
// }
//
//
// function semi1(){
//     Highcharts.chart('semipie1', {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },
//
//         title: {
//             text: 'Room <br>Types<br> in LA',
//             align: 'center',
//             verticalAlign: 'middle',
//             y: 60
//         },
//         subtitle:{
//             text: "Source: http://insideairbnb.com/get-the-data.html"
//         },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         accessibility: {
//             point: {
//                 valueSuffix: '%'
//             }
//         },
//         plotOptions: {
//             pie: {
//                     colors:['#97C1A9','#B6CFB6','#CCE2CB', '#55CBCD'],
//                 dataLabels: {
//                     enabled: true,
//                     distance: -60,
//                     style: {
//                         fontWeight: 'bold',
//                         font: '13px Courier, monospace',
//                         color: 'black'
//                     }
//                 },
//                 startAngle: -90,
//                 endAngle: 90,
//                 center: ['50%', '75%'],
//                 size: '110%'
//             }
//         },
//         series: [{
//             type: 'pie',
//             name: 'Browser share',
//             innerSize: '50%',
//             data: [
//                 ['Entire Apt/Home', 64.31],
//                 ['Private Room', 31.93],
//                 ['Shared Room', 3.25],
//                 ['Hotel Room', 0.51],
//             ]
//         }]
//     });
// }
//
//
// function semi2(){
//     Highcharts.chart('semipie2', {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: 0,
//             plotShadow: false
//         },
//
//         title: {
//             text: 'Room <br>Types<br> in NYC',
//             align: 'center',
//             verticalAlign: 'middle',
//             y: 60
//         },
//         subtitle:{
//             text: "Source: http://insideairbnb.com/get-the-data.html"
//         },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         accessibility: {
//             point: {
//                 valueSuffix: '%'
//             }
//         },
//         plotOptions: {
//             pie: {
//                     colors:['#97C1A9','#B6CFB6','#CCE2CB', '#55CBCD'],
//                 dataLabels: {
//                     enabled: true,
//                     distance: -60,
//                     style: {
//                         fontWeight: 'bold',
//                         font: 'Courier, monospace',
//                         color: 'black'
//                     }
//                 },
//                 startAngle: -90,
//                 endAngle: 90,
//                 center: ['50%', '75%'],
//                 size: '110%'
//             }
//         },
//         series: [{
//             type: 'pie',
//             name: 'Browser share',
//             innerSize: '50%',
//             data: [
//                 ['Entire Apt/Home', 51.18 ],
//                 ['Private Room', 45.90],
//                 ['Shared Room', 2.06],
//                 ['Hotel Room', 0.87],
//             ]
//         }]
//     });
// }
