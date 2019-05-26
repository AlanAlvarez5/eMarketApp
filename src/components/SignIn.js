import React, { Component } from 'react';

export default class SignIn extends Component {
    render() {
        return (
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="card text-center">
                            <div class="card-header">
                                <h3>SignIn</h3>
                            </div>
                            <img src="/img/logo.png" alt="Logo Fazt" class="card-img-top mx-auto m-2 rounded-circle w-50"/>
                            <div class="card-body">
                                <form action="/signin" method="POST">
                                    <div class="form-group">
                                        <input type="text" name="username" placeholder="Usuario" class="form-control" autofocus />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="password" placeholder="Password" class="form-control"/>
                                    </div>
                                    <button class="btn btn-primary btn-block">
                                        SingIn
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

