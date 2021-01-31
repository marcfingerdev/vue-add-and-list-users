<template>
  <div class="home container">
    <form @submit.prevent="submitForm">
    <h1>Add User</h1>
      <div class="form-group row">
        <label for="addusername" class="col-sm-2 col-form-label">First Name</label>
        <div class="col-sm-10">
          <input @blur="$v.name.$touch()" type="text" class="form-control" id="addusername" placeholder="First name" v-model.trim="this.name">
          <div v-if="$v.name.$error" class="text-danger">
            <p>Please enter at least 3 characters</p>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="addusersurname" class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-10">
          <input @blur="$v.surname.$touch()" type="text" class="form-control" id="addusersurname" placeholder="Last name" v-model.trim="this.surname">
          <div v-if="$v.surname.$error" class="text-danger">
            <p>Please enter at least 3 characters</p>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="addmemberdate" class="col-sm-2 col-form-label">Date of Birth</label>
        <div class="col-sm-10">
          <el-date-picker @blur="$v.dateofbirth.$touch()" type="date" id="addmemberdate" placeholder="Date" v-model="this.dateofbirth" style="width:100%"/>
          <div v-if="$v.dateofbirth.$error" class="text-danger">
            <p>User must be between the age of 18 and 120</p>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" :disabled="$v.$invalid" class="btn btn-dark" style="margin:30px">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {required,minLength,between} from '@vuelidate/validators'

export default {
  name: 'Home',
  data(){
    return{
      name:"",
      surname:"",
      dateofbirth: "",
    }
  },
  validations(){
    return{
      name:{required, minLength: minLength(3)},
      surname:{required, minLength: minLength(3)},
      dateofbirth:{required,between:between(this.calculateIf120(),this.calculateIf18())},
    }
  },
  methods:{
    calculateIf18(){
      var date = new Date();
      date.setFullYear(date.getFullYear() - 18);
      return date;
    },

    calculateIf120(){
      var date = new Date();
      date.setFullYear(date.getFullYear() - 120);
      return date;
    },

    submitForm(){
      this.dateofbirth = new Date(this.dateofbirth);
      let userToSend = [this.name,this.surname,this.dateofbirth];
      this.$store.commit("addToObjects",userToSend);
      this.name = "";
      this.surname = "";
      this.dateofbirth = "";
      this.$v.$reset();
    }
  },
  beforeUnmount() {
    const options = this.$options;
    if (options.computed.$v) {
      delete options.computed.$v;
    }
  },
  component:{
    
  }
}
</script>
