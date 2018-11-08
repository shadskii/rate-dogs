<script>
import {Pie} from 'vue-chartjs';

export default {
  extends: Pie,
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.renderChart({
      labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
      datasets: [
        {
          backgroundColor: [
            '#F0B0AA',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#41B883',
          ],
          data: this.data,
        },
      ],
    }, {responsive: true, maintainAspectRatio: false});
  },
};
</script>
