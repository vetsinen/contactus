<template>
    <div>
        <div>hello,<span class="user">{{username}}</span> let's add contact<span class="badge badge-pill badge-primary">I am badge from bootstrap</span></div>


        <form>
            <label>Person name and Surname <input type="text" v-model="fio"
                                                  placeholder="name surname"></label>
            <br/>
            <label>Phone <input type="text" v-model="phone"
                                                  placeholder="phone number"></label>
            <br/>
            <label>Points of contact
                <select>
                    <option>Investment</option>
                    <option>Consulting</option>
                    <option>not yet</option>
                </select>
            </label>
            <br/>
            <label>Industry
                <select>
                    <option>Sales</option>
                    <option>Education</option>
                    <option>Pharmacy</option>
                </select></label>
            <br/>

            <button v-on:click="add">add and see contacts</button>
            <button v-on:click="add">add and fill action</button>
        </form>
        <div>let's add action</div>
        <form>
            <select v-model="action.type">
                <option>sendSms</option>
                <option>meetAtPub</option>
                <option>orderAGift</option>
            </select><br/>
            <button>I wonna this act</button>
        </form>
        <div class="actions">
            <span v-for="el in actions">{{el.type}}<br/></span>
        </div>
        <hr/>
        <div class="contacts">
            <span v-for="el in contacts">{{el.fio}}|{{el.phone}}<br/></span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AddContact",
        data: function () {
            return {
                username: 'Rodion',
                contacts: [
                    {fio: "Serhiy Ruban", phone: '021-422-6373', id:8574566464546},
                    {fio: "Roman Suhan", phone: '021-242-6373',id:46837543653563},
                    {fio: "Manuk Nabru", phone: '021-242-6363',id:43733457833},
                ],
                actions: [
                    {type:'sendSms',date:null,result:null},
                    {type:'meetAtPub',date:null,result:null},
                ],
                fio:null,
                phone: null,

                action: {
                    type: 'sendSms',
                    target: 123
                }
            }
        },
        methods: {
            add: function () {
                this.contacts.push({fio:this.fio, phone:this.phone});
                this.fio = null;
                this.phone = null;
            }
        },
        mounted() {
            if (localStorage.username) {
                this.name = localStorage.username;
            }
            localStorage.username = this.username;
            localStorage.contacts = JSON.stringify(this.contacts);
        },
//        watch: {
//            name(newName) {
//                localStorage.username = newName;
//            }
//        }
    };
</script>
<style scoped>
    .user {
        color: red;
        font-size: larger;
    }
</style>
