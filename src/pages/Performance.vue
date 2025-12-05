<template>
  <div>
    <h2>Performance Reviews Page</h2>
    <p>Performance review information will appear here.</p>

        <ul class="list-group mt-3">
      <li
        v-for="employee in employees"
        :key="employee.employeeId"
        class="list-group-item"
      >
        <strong>{{ employee.name }}</strong><br>
        Position: {{ employee.position }}<br>
        Department: {{ employee.department }}
      </li>  
    </ul>
  </div>
  
</template>

<script>

import performanceData from '../data/performance_info.json';

export default {
  name: "Performance",

data() {
  return {
    employees: employeeData.employeeInformation
    };
  }
};
</script>
