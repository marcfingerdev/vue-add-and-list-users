<template>
  <div v-if="this.$store.state.objects.length == 0" class="table-responsive">
    <h1>No Users Yet</h1>
  </div>
  <div v-if="this.$store.state.objects.length > 0" class="about">
    <h1>List of Users</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="res in this.$store.state.objects" :key="res.id">
      <td>{{res.name}}</td>
      <td>{{res.surname}}</td>
      <td>{{calculate_age(res.dateofbirth)}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  methods:{
    calculate_age(dob) { 
    var difference = Date.now() - dob.getTime();
    var agedate = new Date(difference); 
  
    return Math.abs(agedate.getUTCFullYear() - 1970);
    },
  }
}
</script>