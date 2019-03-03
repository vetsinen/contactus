<template>
    <div>
        <div>let's add action</div>
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

            <button v-on:click="add">add and contact</button>
            <!--<button v-on:click="add">add and fill action</button>-->
        </form>

    </div>
</template>

<script>
    export default {
        name: "AddContact",
        data: function () {
            return {
                fio:null,
                phone: null,
                contacts:[],
            }
        },
        methods: {
            add:function () {
                console.log('Yo');
                console.log(this.fio);
                this.contacts.push({fio:this.fio, phone:this.phone});
                this.fio = null;
                this.phone = null;
                localStorage.contacts = JSON.stringify(this.contacts);
            }
        },
        mounted() {
            if (localStorage.contacts) {
                this.contacts = JSON.parse(localStorage.contacts);
                console.log(this.contacts);
            }
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
