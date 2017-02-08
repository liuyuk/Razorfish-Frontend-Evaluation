$(function() {
    /* Highchart is used for the generation of the pie chart */
    /* Preset the available colors used by the chart */
    Highcharts.setOptions({
        colors: ['#17A589', '#ED561B', '#F7DC6F', '#D0D3D4']
    })
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_container',
            type: 'pie',
            borderRadius: 0
        },
        title: {
            text: 'DATA TRANSFER'
        },
        /* Tootip Setup */
        tooltip: {
            pointFormat: '<b>{point.percentage: .1f}%</b>'
        },
        /* Chart Setup */
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: '50%',
                showInLegend: true,
                dataLabels:{
                    enabled: true,
                    format: '<b>{point.y}gb'
                }
            }
        },
        /* Data points */
        series: [{
            data: [{
                    name: 'Audio',
                    y: 112
                }, {
                    name: 'Video',
                    y: 47
                }, {
                    name: 'Photo', 
                    y: 35
                }, {
                    name: 'Other',
                    y: 10
                }
            ]
        }]
    });
});

/* jQuery is used for the switching between header tabs
and also to hide and show the two contents*/
$(document).ready(function(){
    $("li.header.report").click(function() {
        $("#chart_container").hide();
        $("#report_container").show();
        $(this).css('background-color', 'white');
        $(this).css('color', 'gray');
        $("li.header.stats").css('background-color', 'dimgray');
        $("li.header.stats").css('color', 'whitesmoke');
    });
    $("li.header.stats").click(function() {
        $("#chart_container").show();
        $("#report_container").hide();
        $(this).css('background-color', 'white');
        $(this).css('color', 'gray');
        $("li.header.report").css('background-color', 'dimgray');
        $("li.header.report").css('color', 'whitesmoke');
    });
});