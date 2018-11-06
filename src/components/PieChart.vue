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
      labels: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#F0B0AA',
          ],
          data: this.data,
        },
      ],
    }, {responsive: true, maintainAspectRatio: false});
  },
};
</script>
