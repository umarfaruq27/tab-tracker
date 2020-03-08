/*this file AuthenticationService is going to be used for basically hitting that register endpoint that we have*/
import Api from '@/services/Api'

export default{
    register(credentials){
        return Api().post('register', credentials)
    }
}
//credentials disini merupakan objek yang akan dikirimkan untuk di post
/*AuthenticationService.js is going to export an object that has register method
Sehingga nanti nya kita dapat gunakan objek hasil ekspor tersebut dengan cara:
AuthenticationService.register({
    email: 'test@gmail.com',
    password: '123456'
});

*/