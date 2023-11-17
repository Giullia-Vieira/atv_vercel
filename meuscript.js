        google.charts.load('current', {
            'packages': ['geochart'],
        });

        google.charts.setOnLoadCallback(drawRegionsMap);

        
        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Estado', 'População'],
                ['BR-AC', 881935],
                ['BR-AL', 3337357],
                ['BR-AP', 845731],
                ['BR-AM', 4144597],
                ['BR-BA', 14873064],
                ['BR-CE', 9132078],
                ['BR-DF', 3015268],
                ['BR-ES', 4018650],
                ['BR-GO', 7113540],
                ['BR-MA', 7075181],
                ['BR-MT', 3526220],
                ['BR-MS', 2809394],
                ['BR-MG', 21168791],
                ['BR-PA', 8602865],
                ['BR-PB', 4039277],
                ['BR-PR', 11433957],
                ['BR-PE', 9557071],
                ['BR-PI', 3273227],
                ['BR-RJ', 17264943],
                ['BR-RN', 3506853],
                ['BR-RO', 1787279],
                ['BR-RR', 605761],
                ['BR-RS', 11377239],
                ['BR-SC', 7164788],
                ['BR-SE', 2298696],
                ['BR-SP', 45919049],
                ['BR-TO', 1572866]
            ]);

            var options = {
                region: 'BR',
                resolution: 'provinces',
                colorAxis: {colors: ['#e7711c', '#4374e0']},
                backgroundColor: '#81d4fa',
                datalessRegionColor: '#f8bbd0',
                defaultColor: '#f5f5f5',
            };

            var chart = new google.visualization.GeoChart(document.getElementById('geochart_div'));

            chart.draw(data, options);
        }