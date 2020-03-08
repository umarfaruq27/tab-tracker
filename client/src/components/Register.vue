<template>
    <div>
      <h1>Register</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <input v-model="email" type="email" placeholder="write your email here" name="email">
              </td>
            </tr>
            <tr>
              <td>
                <input v-model="password" type="password" placeholder="your password" name="password">
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // watch: {
  //   email(value){
  //     console.log('Email has changed', value)
  //   },
  //   password(value){
  //     console.log('Kalo ini password yang berubah', value)
  //   }
  // },
  methods: {
    //method register ini akan terhubung dengan file AuthenticationService ketika Register button di click
    // AuthenticationService.register meminta parameter berupa objek yang nanti akan dikirimkan ke back end
    // await digunakan untuk memberikan response back. Dan ketika kita mendapatkan response maka akan kita coba console.log(response)
    async register(){
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  },
  mounted(){
    setTimeout(() => {
      this.email = 'Hello World'
    }, 2000); //artinya setelah dua detik after reload, dia akan berubah menjadi HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
