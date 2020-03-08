import axios from 'axios'

/*axios disini berfungsi untuk menghubungkan antara front-end dan back-end
baseURL menuju ke backendURL dimana server nya backend ialah localhost:8081*/

/*Export default dibawah ini sejenis API yang berguna untuk hitting our different endpoint*/
export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}