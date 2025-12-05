<template>
  <div class="dashboard p-3">
    <h2 class="mb-4">Dashboard</h2>

  <div class="row-mb-4">
    <div class="col-md-3" v-for="card in kpis" :key="card-label">
      <div class="card text-center shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{{ card.label }}</h5>
          <h2 class="card-text">{{ card.value }}</h2>
        </div>
      </div>
    </div>
  </div>

    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5>Employees by Department (Chart Coming Soon)</h5>
        <div class="placeholder-glow">  
          <div class="placeholder col-12" style="height: 150px;"></div>
        </div>
      </div>
    </div>

    <div class="card-shadow-sm mb-4">
      <div class="card-body">
        <h5>Recent Activity</h5>
        <ul class="list-group mt-3">
          <li v-for="entry in recentActivity" :key="entry.id" class="list-group-item">
            {{ entry.message }} <br>
          <small class="text-muted">{{ entry.time }}</small>
          </li> 
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import employeeData from "../data/employee_info.json";
// import activityData from "../data/activity.json";

export default {
  name: "Dashboard",

  data() {
    return {
      employees: employeeData.employeeInformation,

      // THIS PART NEEDS A activity.json FILE, PLACE HOLDER DATA IS HERE //
      recentActivity: [
        { id: 1, message: "Activity data not available yet.", time: "—" }
      ],

      kpis: [
        { label: "Total Employees", value: 0 },
        { label: "On Leave Today", value: 0 },
        { label: "Pending Requests", value: 5 },
        { label: "New Hires This Month", value: 2 }
      ]
    };
  },

  mounted() {
    // Dynamically fill KPI values
    this.kpis[0].value = this.employees.length; // total staff
    this.kpis[1].value = this.employees.filter(e => e.onLeaveToday).length;
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}
</style>
