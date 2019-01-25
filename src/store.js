import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const users = () => {
    return [{
        "id": 1,
        "first_name": "Dottie",
        "last_name": "Hannon",
        "email": "dhannon0@google.pl",
        "gender": "Female",
        "available": false,
        "ip_address": "214.140.193.90"
      }, {
        "id": 2,
        "first_name": "Goldie",
        "last_name": "Hallatt",
        "email": "ghallatt1@google.pl",
        "gender": "Female",
        "available": true,
        "ip_address": "198.228.235.250"
      }, {
        "id": 3,
        "first_name": "Perry",
        "last_name": "McKerton",
        "email": "pmckerton2@uol.com.br",
        "gender": "Male",
        "available": true,
        "ip_address": "236.209.160.53"
      }, {
        "id": 4,
        "first_name": "Pancho",
        "last_name": "Burg",
        "email": "pburg3@is.gd",
        "gender": "Male",
        "available": false,
        "ip_address": "129.142.127.96"
      }, {
        "id": 5,
        "first_name": "Janet",
        "last_name": "Bortoluzzi",
        "email": "jbortoluzzi4@xrea.com",
        "gender": "Female",
        "available": false,
        "ip_address": "215.168.181.36"
      }, {
        "id": 6,
        "first_name": "Cristiano",
        "last_name": "Scanes",
        "email": "cscanes5@ustream.tv",
        "gender": "Male",
        "available": false,
        "ip_address": "154.191.34.34"
      }, {
        "id": 7,
        "first_name": "Arlyne",
        "last_name": "Lotwich",
        "email": "alotwich6@last.fm",
        "gender": "Female",
        "available": true,
        "ip_address": "227.129.142.102"
      }, {
        "id": 8,
        "first_name": "Cal",
        "last_name": "Castano",
        "email": "ccastano7@livejournal.com",
        "gender": "Female",
        "available": true,
        "ip_address": "170.170.48.29"
      }, {
        "id": 9,
        "first_name": "Tabatha",
        "last_name": "Wainwright",
        "email": "twainwright8@phoca.cz",
        "gender": "Female",
        "available": true,
        "ip_address": "53.45.159.124"
      }, {
        "id": 10,
        "first_name": "Maurits",
        "last_name": "Eates",
        "email": "meates9@squarespace.com",
        "gender": "Male",
        "available": true,
        "ip_address": "106.1.252.6"
      }, {
        "id": 11,
        "first_name": "Olivia",
        "last_name": "Hatterslay",
        "email": "ohatterslaya@rambler.ru",
        "gender": "Female",
        "available": true,
        "ip_address": "159.215.146.201"
      }, {
        "id": 12,
        "first_name": "Maire",
        "last_name": "Kaasman",
        "email": "mkaasmanb@ask.com",
        "gender": "Female",
        "available": true,
        "ip_address": "85.124.73.23"
      }, {
        "id": 13,
        "first_name": "Caspar",
        "last_name": "Persey",
        "email": "cperseyc@un.org",
        "gender": "Male",
        "available": true,
        "ip_address": "59.92.202.92"
      }, {
        "id": 14,
        "first_name": "Lauryn",
        "last_name": "Del Castello",
        "email": "ldelcastellod@nymag.com",
        "gender": "Female",
        "available": true,
        "ip_address": "32.195.108.69"
      }, {
        "id": 15,
        "first_name": "Konstance",
        "last_name": "Nendick",
        "email": "knendicke@de.vu",
        "gender": "Female",
        "available": true,
        "ip_address": "117.229.27.31"
      }, {
        "id": 16,
        "first_name": "Dylan",
        "last_name": "Gout",
        "email": "dgoutf@comsenz.com",
        "gender": "Male",
        "available": true,
        "ip_address": "71.65.177.94"
      }, {
        "id": 17,
        "first_name": "Patsy",
        "last_name": "Twomey",
        "email": "ptwomeyg@ebay.co.uk",
        "gender": "Female",
        "available": true,
        "ip_address": "24.188.119.155"
      }, {
        "id": 18,
        "first_name": "Adeline",
        "last_name": "Bennedsen",
        "email": "abennedsenh@ifeng.com",
        "gender": "Female",
        "available": true,
        "ip_address": "234.104.186.120"
      }, {
        "id": 19,
        "first_name": "Andrei",
        "last_name": "Siret",
        "email": "asireti@twitter.com",
        "gender": "Female",
        "available": true,
        "ip_address": "20.171.113.147"
      }, {
        "id": 20,
        "first_name": "Wynne",
        "last_name": "Fleis",
        "email": "wfleisj@digg.com",
        "gender": "Female",
        "available": true,
        "ip_address": "22.211.115.124"
      }]
}
export default new Vuex.Store({
    state: {
        users: users(),
        filter: {
            query:'',
            available: true
        }
    },
    mutations: {
        SET_QUERY (state, query) {
            state.filter.query = query;
        },
        SET_AVAILABLE (state) {
            state.filter.available = !state.filter.available;
        }
    },
    getters:{
        filterUsers (state) {
            let users = state.users.filter(user => user.available === state.filter.available);
            if (state.filter.query.length > 2){
                return users.filter(user => user.first_name.toLocaleLowerCase().includes(state.filter.query));
            }
            return users;
        }
    }
})