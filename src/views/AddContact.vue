<template>
    <div class="AddContact">
        <div>let's add contact</div>


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
    </div>
</template>