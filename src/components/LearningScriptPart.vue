<template>
    <div>
        <table>
            <tr>
                <td>Project Name</td>
                <td>{{ProjectName}}</td>
            </tr>
            <tr>
                <td>Developer Name</td>
                <td><span v-for="e in DeveloperName" :key="e">{{e}} </span></td>
            </tr>
            <tr>
                <td>Start Date</td>
                <td>{{StartDate}}</td>
            </tr>
            <tr>
                <td>Project Name Length</td>
                <td>{{getProjectLength}}</td>
            </tr>
        </table>
        <div>
            <input type="text" @keyup.enter="addDeveloper" class="form-control w-25 d-inline mx-1 mb-2" v-model="DevName" placeholder="Enter new developer name">
            <button type="submit" class="btn btn-success" @click="addDeveloper">Add Developer</button>
        </div>
        <div>
            <input type="text" @keyup.enter="changeProject" class="form-control w-25 d-inline mx-1 mb-2" v-model="pName" placeholder="Enter new project name">
            <button type="submit" class="btn btn-warning" @click="changeProject">Change Project</button>
        </div>
        <ChildComponent elementType="child" />
    </div>
</template>

<script>

// Importing the Child Element
import ChildComponent from './ChildComponent.vue';

export default {

    // Name of the Component
    name: "LearningScriptPart",

    // Contains all the Variables
    data() {
        return {
            ProjectName: "Vue2 Concepts",
            DeveloperName: ["Ayush"],
            StartDate: "19-Oct-2022",
            DevName: "",
            pName: ""
        };
    },

    // Contains all the methods, execute on every render
    methods: {
        addDeveloper() {
            this.DeveloperName.push(this.DevName);
            this.DevName = "";
        },
        changeProject() {
            this.ProjectName = this.pName;
            this.pName = "";
        }
    },

    // Register the child Component
    components: { 
        ChildComponent 
    },

    // Caching the value, only run on updating the dependency
    computed: {
        getProjectLength() {
            console.log(this.ProjectName);
            return this.ProjectName.length;
        }
    }
}
</script>

<style>
    table,
    tr,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    td {
        padding: 10px;
        max-width: 200px;
    }
    table {
        margin: auto;
        margin-bottom: 20px;
    }
</style>