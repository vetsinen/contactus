<template>
    <div id="app">
        <div class="container-scroller">
            <div class="container-fluid page-body-wrapper">
                <!-- partial:partials/_sidebar.html -->
                <nav class="sidebar sidebar-offcanvas" id="sidebar">
                    <ul class="nav">
                        <li class="nav-item nav-profile">
                            <div class="nav-link">
                                <div class="user-wrapper">
                                    <div class="profile-image">
                                        <img src="./assets/logo.png" width="30px" height="30px" alt="profile image">
                                    </div>
                                    <div class="text-wrapper">
                                        <span class="profile-name">Den Wax</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">
                                <i class="menu-icon mdi mdi-television"></i>
                                <span class="menu-title">Dashboard</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/addcontact">
                                <i class="menu-icon mdi mdi-television"></i>
                                <span class="menu-title">Add contact</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="contacts">
                                <i class="menu-icon mdi mdi-television"></i>
                                <span class="menu-title">Contacts</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="addaction">
                                <i class="menu-icon mdi mdi-television"></i>
                                <span class="menu-title">Add Action</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false"
                               aria-controls="ui-basic">
                                <i class="menu-icon mdi mdi-content-copy"></i>
                                <span class="menu-title">logout</span>
                            </a>
                            <div class="collapse" id="ui-basic">
                            </div>
                        </li>
                    </ul>
                </nav>
                <!-- partial -->
                <div class="main-panel">
                    <div class="content-wrapper">

                        <div class="row">

                            <div class="">
                                <div class="input-group">
                                    <input type="text" class="form-control"
                                           placeholder="Поиск по контактам или задачам..." aria-label="Username"
                                           aria-describedby="colored-addon3">
                                    <div class="input-group-append bg-primary border-primary">
                            <span class="input-group-text bg-transparent">
                              <i class="fas fa-search-dollar" style="color:white;"></i>
                            </span>
                                    </div>
                                </div>

                            </div>&nbsp;

                            <div class="buttons">
                                <router-link to="/addcontact" class="btn btn-success">Add contact + ✆
                                    <i class="mdi mdi-plus"></i>
                                </router-link>&nbsp;
                                <router-link to="addaction" class="btn btn-primary">Add action + ✈
                                    <i class="mdi mdi-plus"></i>
                                </router-link>
                            </div>


                        </div>
                        <div class="real-content">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </div>

            <!-- partial:partials/_footer.html -->
            <footer class="footer">
                <div class="container-fluid clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2019
              <a href="http://www.bootstrapdash.com/" target="_blank">ContActus</a>. All rights reserved.</span>
                    <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with ❤
            </span>
                </div>
            </footer>
            <!-- partial -->
        </div>
        <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
</template>
<div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/contacts">contacts</router-link>
    |
    <router-link to="/actions">actions</router-link>
    |
    <router-link to="/about">about</router-link>
</div>
<router-view/>