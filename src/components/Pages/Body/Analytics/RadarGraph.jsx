// import Utils from 'chart.js';

export default function RadarGraph() {
    // const DATA_COUNT = 7;
    // const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    // const labels = Utils.months({ count: 7 });
    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: Utils.numbers(NUMBER_CFG),
    //             borderColor: Utils.CHART_COLORS.red,
    //             backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    //         },
    //         {
    //             label: 'Dataset 2',
    //             data: Utils.numbers(NUMBER_CFG),
    //             borderColor: Utils.CHART_COLORS.blue,
    //             backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    //         }
    //     ]
    // };
    return (
        <canvas id="myChart" width="400" height="400"></canvas>
    );
}